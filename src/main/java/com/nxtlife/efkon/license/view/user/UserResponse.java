package com.nxtlife.efkon.license.view.user;

import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.nxtlife.efkon.license.entity.user.Authority;
import com.nxtlife.efkon.license.entity.user.Role;
import com.nxtlife.efkon.license.entity.user.User;
import com.nxtlife.efkon.license.view.user.security.AuthorityResponse;
import com.nxtlife.efkon.license.view.user.security.RoleResponse;

import io.swagger.v3.oas.annotations.media.Schema;

@JsonInclude(value = Include.NON_ABSENT)
public class UserResponse {

	@Schema(description = "Id of user", example = "1")
	private Long id;
	@Schema(description = "Name of user", example = "John")
	private String name;
	@Schema(description = "User's username", example = "john123")
	private String username;
	@Schema(description = "User's email", example = "john@gmail.com")
	private String email;
	@Schema(description = "User's contact number", example = "1234567890")
	private String contactNo;
	@Schema(description = "User's roles info")
	private Set<RoleResponse> roles;
	@Schema(description = "User's authorities info")
	private Set<AuthorityResponse> authorities;

	public UserResponse() {

	}
	
	public UserResponse(String email, String contactNo) {
		super();
		this.email=email;
		this.contactNo=contactNo;
	}

	public UserResponse(User user) {
		if (user != null) {
			this.setId(user.getId() == null ? user.getUserId() : user.getId());
			this.setContactNo(user.getContactNo());
			this.setEmail(user.getEmail());
			this.setName(user.getName());
			this.setUsername(user.getUsername());
			this.authorities = new HashSet<>();
			for (Authority authority : user.getAuthorities()) {
				this.authorities.add(new AuthorityResponse(authority));
			}
			this.roles = new HashSet<>();
			for (Role role : user.getRoles()) {
				this.roles.add(new RoleResponse(role));
			}
		}
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getContactNo() {
		return contactNo;
	}

	public void setContactNo(String contactNo) {
		this.contactNo = contactNo;
	}

	public Set<RoleResponse> getRoles() {
		return roles;
	}

	public void setRoles(Set<RoleResponse> roles) {
		this.roles = roles;
	}

	public Set<AuthorityResponse> getAuthorities() {
		return authorities;
	}

	public void setAuthorities(Set<AuthorityResponse> authorities) {
		this.authorities = authorities;
	}
}
