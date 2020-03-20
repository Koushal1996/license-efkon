package com.nxtlife.efkon.license.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.nxtlife.efkon.license.entity.common.UserRoleKey;
import com.nxtlife.efkon.license.entity.user.UserRole;

public interface UserRoleDao extends JpaRepository<UserRole, UserRoleKey> {

	@Query(value = "SELECT * FROM user_role u_r inner join role r where u_r.user_id = ?1 and u_r.role_id=r.id", nativeQuery = true)
	public List<UserRole> findByUserId(Long userId);

}
