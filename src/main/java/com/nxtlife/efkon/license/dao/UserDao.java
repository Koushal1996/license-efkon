package com.nxtlife.efkon.license.dao;

import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.nxtlife.efkon.license.entity.user.User;
import com.nxtlife.efkon.license.view.user.UserResponse;

public interface UserDao extends JpaRepository<User, Long> {

	public User findByUsername(String username);
	
	@Query(value="select email, contact_no as contactNo from user where username= ?1", nativeQuery=true)
	public Map<String, String> findEmailAndContactByUsername(String username);

	@Query(value = "select password from user where id = ?1", nativeQuery = true)
	public String findPasswordById(Long id);

	@Modifying
	@Query(value = "update user set password=:password where username =:username", nativeQuery = true)
	public int setPassword(@Param("username") String username, @Param("password") String password);

	@Modifying
	@Query(value = "update user set password=:password where id =:id", nativeQuery = true)
	public int setPassword(@Param("id") Long id, @Param("password") String password);
	
	@Modifying
	@Query(value = "update user set generated_password=:password where username =:username", nativeQuery = true)
	public int setGeneratedPassword(@Param("username") String username, @Param("password") String password);

	public List<UserResponse> findByActiveTrue();

}
