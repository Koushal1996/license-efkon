package com.nxtlife.efkon.license.service;

import java.util.List;

import com.nxtlife.efkon.license.ex.NotFoundException;
import com.nxtlife.efkon.license.ex.ValidationException;
import com.nxtlife.efkon.license.view.user.security.RoleRequest;
import com.nxtlife.efkon.license.view.user.security.RoleResponse;

public interface RoleService {

	/**
	 * this method used to get roles related to that organization.

	 * @return list of <tt>RoleResponse</tt>
	 * @throws NotFoundException
	 *             if organization id not found
	 */
	public List<RoleResponse> getAllRoles();

	/**
	 * this method used to save role details. If role already exist in database
	 * then it throws exception otherwise it return saved role details.
	 * 
	 * @param request
	 * @return <tt>RoleResponse</tt>
	 * @throws ValidationException
	 *             if role already exist in database or some of the authority
	 *             ids are not valid
	 */
	public RoleResponse save(RoleRequest request);

	public RoleResponse update(Long roleId, RoleRequest request);
}
