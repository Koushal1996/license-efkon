package com.nxtlife.efkon.license.service.impl;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nxtlife.efkon.license.dao.jpa.ProjectJpaDao;
import com.nxtlife.efkon.license.dao.jpa.ProjectProductJpaDao;
import com.nxtlife.efkon.license.dao.jpa.ProjectTypeJpaDao;
import com.nxtlife.efkon.license.dao.jpa.RoleJpaDao;
import com.nxtlife.efkon.license.dao.jpa.UserJpaDao;
import com.nxtlife.efkon.license.dao.jpa.UserRoleJpaDao;
import com.nxtlife.efkon.license.entity.project.Project;
import com.nxtlife.efkon.license.entity.user.User;
import com.nxtlife.efkon.license.entity.user.UserRole;
import com.nxtlife.efkon.license.ex.NotFoundException;
import com.nxtlife.efkon.license.ex.ValidationException;
import com.nxtlife.efkon.license.service.BaseService;
import com.nxtlife.efkon.license.service.ProjectService;
import com.nxtlife.efkon.license.util.AuthorityUtils;
import com.nxtlife.efkon.license.view.project.ProjectRequest;
import com.nxtlife.efkon.license.view.project.ProjectResponse;
import com.nxtlife.efkon.license.view.user.UserResponse;

@Service("projectServiceImpl")
@Transactional
public class ProjectServiceImpl extends BaseService implements ProjectService {

	private static PasswordEncoder userPasswordEncoder = new BCryptPasswordEncoder();

	@Autowired
	private ProjectJpaDao projectDao;

	@Autowired
	private ProjectTypeJpaDao projectTypeDao;

	@Autowired
	private ProjectProductJpaDao projectProductDao;

	@Autowired
	private RoleJpaDao roleDao;

	@Autowired
	private UserJpaDao userDao;

	@Autowired
	private UserRoleJpaDao userRoleDao;

	private static Logger logger = LoggerFactory.getLogger(ProjectServiceImpl.class);

	/**
	 * this method used to validate request. In this we are validating that project
	 * type and project manager are valid
	 * 
	 * @param request
	 */
	private void validate(ProjectRequest request) {
		if (request.getProjectTypeId() != null) {
			if (!projectTypeDao.existsById(request.getProjectTypeId())) {
				throw new ValidationException(
						String.format("Project type (%s) not found", mask(request.getProjectTypeId())));
			}
		}

		if (request.getProjectManagerId() != null) {
			if (!userRoleDao.existsByUserIdAndRoleName(request.getProjectManagerId(), "Project Manager")) {
				throw new ValidationException(
						String.format("Project manager doesn't exists", mask(request.getProjectManagerId())));
			}
		}

	}

	@Override
	@Secured(AuthorityUtils.PROJECT_CREATE)
	public ProjectResponse save(ProjectRequest request) {
		validate(request);
		UserResponse existUser = userDao.findByEmailAndActive(request.getCustomerEmail(), true);
		Long customerRoleId = roleDao.findIdByName("Customer");
		if (customerRoleId == null) {
			throw new ValidationException("Customer role not created please ask admin to generate role for customer");
		}
		if (existUser != null) {
			Set<Long> roleIds = userRoleDao.findRoleIdsByUserId(unmask(existUser.getId()));
			roleIds.remove(customerRoleId);
			if (!roleIds.isEmpty()) {
				throw new ValidationException(
						"This email id already used for management that's why you can't use this as a customer");
			}
		}
		User user = null;
		Project project = request.toEntity();
		if (existUser == null) {
			String code = String.format("%04d", sequenceGenerator("User"));
			user = userDao.save(new User(request.getCustomerName(), code, request.getCustomerEmail(),
					userPasswordEncoder.encode("12345"), request.getCustomerEmail(), project.getIsEmailSend(),
					request.getCustomerContactNo()));
			userRoleDao.save(new UserRole(user.getId(), customerRoleId));
		}
		project.setCustomerCode(user == null ? existUser.getCode() : user.getCode());
		projectDao.save(project);
		ProjectResponse response = projectDao.findResponseById(project.getId());
		return response;

	}

	@Override
	@Secured(AuthorityUtils.PROJECT_UPDATE)
	public ProjectResponse update(Long id, ProjectRequest request) {

		Long unmaskId = unmask(id);
		ProjectResponse response = projectDao.findByIdAndActive(unmaskId, true);
		if (response == null) {
			throw new NotFoundException(String.format("project having id (%s) didn't exist", id));
		}
		validate(request);

		if (request.getCustomerEmail() != null) {
			UserResponse existUser = userDao.findByEmailAndActive(request.getCustomerEmail(), true);
			if (existUser != null && request.getCustomerEmail().equals(existUser.getEmail())) {
				throw new ValidationException(String.format(
						"email (%s) already taken, please enter email which is not used", request.getCustomerEmail()));
			}
		}
		if (request.getCustomerContactNo() != null) {
			UserResponse existUser = userDao.findByContactNoAndActive(request.getCustomerContactNo(), true);
			if (existUser != null && request.getCustomerContactNo().equals(existUser.getContactNo())) {
				throw new ValidationException(String.format(
						"contact number (%s) is already used, please enter contact number which is not used",
						request.getCustomerContactNo()));
			}
		}

		int rows = projectDao.update(unmaskId,
				request.getCustomerContactNo() == null ? response.getCustomerContactNo()
						: request.getCustomerContactNo(),
				request.getCustomerEmail() == null ? response.getCustomerEmail() : request.getCustomerEmail(),
				request.getIsEmailSend() == null ? response.getIsEmailSend() : request.getIsEmailSend(),
				request.getCustomerName() == null ? response.getCustomerName() : request.getCustomerName(),
				request.getProjectManagerId() == null ? unmask(response.getProjectManagerId())
						: request.getProjectManagerId(),
				request.getProjectTypeId() == null ? unmask(response.getProjectTypeId()) : request.getProjectTypeId(),
				getUserId(), new Date());

		if (rows > 0) {
			logger.info("Project updated successfully", unmaskId);
		}

		response = projectDao.findByIdAndActive(unmaskId, true);

		return response;
	}

	/**
	 * return a list of projects which is active
	 *
	 * @return List of <tt>ProjectResponse</tt>
	 */
	@Override
	@Secured(AuthorityUtils.PROJECT_FETCH)
	public List<ProjectResponse> findAll() {
		User user = getUser();
		Set<String> roles = user.getRoles().stream().map(role -> role.getName()).collect(Collectors.toSet());
		List<ProjectResponse> projects;
		List<Map<String, Object>> projectProductCounts;
		if (roles.contains("Customer")) {
			projects = projectDao.findByCustomerEmailAndActive(user.getEmail(), true);
			projectProductCounts = projectProductDao
					.findProjectIdAndCountByGroupByProjectIdAndActiveAndCustomerEmail(true, user.getEmail());
		} else {
			Boolean isProjectManager = false;
			if (roles.contains("Project Manager")) {
				isProjectManager = true;
				roles.remove("Project Manager");
			}
			if (roles.isEmpty() && isProjectManager) {
				projects = projectDao.findByProjectManagerIdAndActive(user.getUserId(), true);
				projectProductCounts = projectProductDao
						.findProjectIdAndCountByGroupByProjectIdAndActiveAndProjectManagerId(true, user.getUserId());
			} else {
				projects = projectDao.findByActive(true);
				projectProductCounts = projectProductDao.findProjectIdAndCountByGroupByProjectIdAndActive(true);
			}
		}

		Map<Long, Long> projectProductCountLookup = new HashMap<>();
		projectProductCounts.forEach(projectProductCount -> {
			projectProductCountLookup.putIfAbsent(Long.parseLong(projectProductCount.get("id").toString()),
					Long.parseLong(projectProductCount.get("count").toString()));
		});
		projects.forEach(project -> {
			project.setProductsCount(projectProductCountLookup.get(unmask(project.getId())));
		});
		return projects;
	}

	@Override
	@Secured(AuthorityUtils.PROJECT_FETCH)
	public ProjectResponse findById(Long id) {
		User user = getUser();
		Long unmaskId = unmask(id);
		Set<String> roles = user.getRoles().stream().map(role -> role.getName()).collect(Collectors.toSet());
		ProjectResponse response;
		Long projectProductCount;
		if (roles.contains("Customer")) {
			response = projectDao.findByIdAndCustomerEmailAndActive(unmaskId, user.getEmail(), true);
		} else {
			Boolean isProjectManager = false;
			if (roles.contains("Project Manager")) {
				isProjectManager = true;
				roles.remove("Project Manager");
			}
			if (roles.isEmpty() && isProjectManager) {
				response = projectDao.findByIdAndProjectManagerIdAndActive(unmaskId, user.getUserId(), true);
			} else {
				response = projectDao.findByIdAndActive(unmaskId, true);
			}
		}

		projectProductCount = projectProductDao.countByProjectIdAndActive(unmaskId, true);
		response.setProductsCount(projectProductCount);
		return response;
	}

}
