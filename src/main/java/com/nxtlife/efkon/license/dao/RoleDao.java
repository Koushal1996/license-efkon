package com.nxtlife.efkon.license.dao;

import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.nxtlife.efkon.license.entity.user.Role;
import com.nxtlife.efkon.license.view.user.security.RoleResponse;

public interface RoleDao extends JpaRepository<Role, Long> {

	public Set<RoleResponse> findByRoleUsersUserId(Long userId);

	public Boolean existsRoleByNameAndOrganizationId(String name, Long organizationId);
	
	@Query(value="select id from role where name=?1 and organization_id=?2", nativeQuery=true)
	public Long findIdByNameAndOrganizationId(String name, Long organizationId);

	@Query(value = "select id from role", nativeQuery = true)
	public List<Long> getAllRoleIds();

}
