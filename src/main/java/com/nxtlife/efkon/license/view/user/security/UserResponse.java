package com.nxtlife.efkon.license.view.user.security;

import java.util.Collection;
import java.util.Set;
import java.util.stream.Collectors;

import com.nxtlife.efkon.license.entity.user.User;
import com.nxtlife.efkon.license.view.Response;

public class UserResponse implements Response {
	private Long id;
	private String name;
	private String username;
	private String password;
	private String email;
	private String contactNo;
	private Boolean accountExpired;
	private Boolean accountLocked;
	private Boolean credentialsExpired;
	private Boolean enabled;

	private Collection<AuthorityResponse> authorities;
	private Set<RoleResponse> roles;

	public UserResponse() {
	}

	public UserResponse(User user) {
		this.id = user.getId();
		this.name = user.getName();
		this.username = user.getUsername();
		this.password = user.getPassword();
		this.email = user.getEmail();
		this.contactNo = user.getContactNo();
		user.getUserRoles().forEach(r -> roles.add(new RoleResponse(r.getRole())));
		this.authorities = user.getAuthorities().stream().map(AuthorityResponse::new).collect(Collectors.toSet());
	}

	public Long getId() {
		return mask(id);
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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
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

	public Boolean getAccountExpired() {
		return accountExpired;
	}

	public void setAccountExpired(Boolean accountExpired) {
		this.accountExpired = accountExpired;
	}

	public Boolean getAccountLocked() {
		return accountLocked;
	}

	public void setAccountLocked(Boolean accountLocked) {
		this.accountLocked = accountLocked;
	}

	public Boolean getCredentialsExpired() {
		return credentialsExpired;
	}

	public void setCredentialsExpired(Boolean credentialsExpired) {
		this.credentialsExpired = credentialsExpired;
	}

	public Boolean getEnabled() {
		return enabled;
	}

	public void setEnabled(Boolean enabled) {
		this.enabled = enabled;
	}

	public Collection<AuthorityResponse> getAuthorities() {
		return authorities;
	}

	public void setAuthorities(Collection<AuthorityResponse> authorities) {
		this.authorities = authorities;
	}

	public Set<RoleResponse> getRoles() {
		return roles;
	}

	public void setRoles(Set<RoleResponse> roles) {
		this.roles = roles;
	}
}
