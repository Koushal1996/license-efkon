package com.nxtlife.efkon.license.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.nxtlife.efkon.license.entity.common.RoleAuthorityKey;
import com.nxtlife.efkon.license.entity.user.RoleAuthority;

public interface RoleAuthorityDao extends JpaRepository<RoleAuthority, RoleAuthorityKey> {

	public List<RoleAuthority> findAllByRoleId(Long roleId);

	@Query(value = "select authority_id from role_authority where role_id = ?1", nativeQuery = true)
	public List<Long> getAllAuthorityIdsByRoleId(Long roleId);

	public int deleteByRoleAuthorityKey(RoleAuthorityKey roleAuthorityKey);

}
