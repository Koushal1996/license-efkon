package com.nxtlife.efkon.license.service.impl;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;
import java.util.Set;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nxtlife.efkon.license.dao.AuthorityDao;
import com.nxtlife.efkon.license.dao.RoleAuthorityDao;
import com.nxtlife.efkon.license.dao.RoleDao;
import com.nxtlife.efkon.license.entity.common.RoleAuthorityKey;
import com.nxtlife.efkon.license.entity.user.Role;
import com.nxtlife.efkon.license.entity.user.RoleAuthority;
import com.nxtlife.efkon.license.ex.NotFoundException;
import com.nxtlife.efkon.license.ex.ValidationException;
import com.nxtlife.efkon.license.service.BaseService;
import com.nxtlife.efkon.license.service.RoleService;
import com.nxtlife.efkon.license.util.AuthorityUtils;
import com.nxtlife.efkon.license.view.user.security.RoleRequest;
import com.nxtlife.efkon.license.view.user.security.RoleResponse;

@Service("roleServiceImpl")
@Transactional
public class RoleServiceImpl extends BaseService implements RoleService {

	private static Logger logger = LoggerFactory.getLogger(RoleServiceImpl.class);

	@Autowired
	private RoleDao roleDao;

	@Autowired
	private RoleAuthorityDao roleAuthorityDao;

	@Autowired
	private AuthorityDao authorityDao;

	private void validateAuthorityIds(Set<Long> requestAuthorityIds) {
		List<Long> authorityIds = authorityDao.findAllIds();
		requestAuthorityIds.removeAll(authorityIds);
		if (!requestAuthorityIds.isEmpty()) {
			throw new ValidationException(
					String.format("Some of the authorities (%s) are not valid", requestAuthorityIds));
		}
	}

	/**
	 * this method used to validate request
	 * 
	 * @param request
	 * @param organizationId
	 */
	private void validateRequest(RoleRequest request, Long organizationId) {
		validateAuthorityIds(request.getAuthorityIds());
		if (roleDao.existsRoleByName(request.getName())) {
			throw new ValidationException(
					String.format("This role (%s) is already exists for this organization", request.getName()));
		}
	}

	@Secured(AuthorityUtils.ROLE_FETCH)
	@Override
	public List<RoleResponse> getAllRoles() {
		return null;
	}

	/**
	 * save the Role <tt>size()</tt>tells no of elements in the list
	 *
	 * <tt>toEntity()</tt> tranform the request into entity
	 *
	 * throw a validation exception when size is less than 1.
	 *
	 * <tt>getUser()</tt>return the user that wil login at that instance
	 *
	 * <findById>return an object by particular id</findById>
	 *
	 *
	 * <saveAll>mehtod save the list of objects in the database</saveAll>
	 * 
	 * @Param request call save method of jpa
	 * @return <tt>RoleResponse</tt>
	 */
	@Secured(AuthorityUtils.ROLE_CREATE)
	@Override
	public RoleResponse save(RoleRequest request) {
		Role role = request.toEntity();
		roleDao.save(role);
		List<RoleAuthority> roleAuthorities = new ArrayList<>();
		for (Long authorityId : request.getAuthorityIds()) {
			if (authorityDao.findResponseById(authorityId) != null) {
				roleAuthorities.add(new RoleAuthority(role.getId(), authorityId));
			}
		}
		roleAuthorityDao.saveAll(roleAuthorities);
		return new RoleResponse(role);
	}

	@Override
	@Secured(AuthorityUtils.ROLE_UPDATE)
	public RoleResponse update(Long id, RoleRequest request) {
		Long unmaskId = unmask(id);
		// Role role = roleDao.findById(unmaskId).orElse(null);
		if (!roleDao.existsById(unmaskId)) {
			throw new NotFoundException(String.format("Role (%s) not found", id));
		}
		validateAuthorityIds(request.getAuthorityIds());

		List<Long> roleAuthorityIds = roleAuthorityDao.getAllAuthorityIdsByRoleId(unmaskId);
		List<RoleAuthority> roleAuthorities = new ArrayList<>();
		// if (request.getName() != null)
		// role.setName(request.getName());
		for (Long authorityId : request.getAuthorityIds()) {
			roleAuthorities.add(new RoleAuthority(unmaskId, authorityId));
		}
		roleAuthorityDao.saveAll(roleAuthorities);
		roleAuthorityIds.removeAll(request.getAuthorityIds());
		if (!roleAuthorityIds.isEmpty()) {
			for (Long authorityId : roleAuthorityIds)
				roleAuthorityDao.deleteById(new RoleAuthorityKey(unmaskId, authorityId));
		}
		logger.info("Role {} updated successfully", request.getName());
		return null;

	}

}
