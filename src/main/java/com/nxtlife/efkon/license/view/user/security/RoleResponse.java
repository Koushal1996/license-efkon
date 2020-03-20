package com.nxtlife.efkon.license.view.user.security;

import java.math.BigInteger;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.nxtlife.efkon.license.entity.user.Role;
import com.nxtlife.efkon.license.view.Response;

import io.swagger.v3.oas.annotations.media.Schema;

@JsonInclude(value = Include.NON_ABSENT)
public class RoleResponse implements Response {

	@Schema(description = "Name of the role", example = "admin")
	public String name;

	@Schema(description = "Id of the role", example = "1")
	public Long id;

	@Schema(description = "authorities for the role")
	public List<AuthorityResponse> authorities;

	public RoleResponse() {
		super();
	}

	public RoleResponse(Long id, String name) {
		super();
		this.id = id;
		this.name = name;
	}

	public RoleResponse(Role role) {
		super();
		this.name = role.getName();
		this.id = role.getId();
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Long getId() {
		return mask(id);
	}

	public void setId(Long id) {
		this.id = id;
	}

	public List<AuthorityResponse> getAuthorities() {
		return authorities;
	}

	public void setAuthorities(List<AuthorityResponse> authorities) {
		this.authorities = authorities;
	}

}
