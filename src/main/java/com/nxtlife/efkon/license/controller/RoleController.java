package com.nxtlife.efkon.license.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.nextlife.license.service.RoleService;
import com.nxtlife.efkon.license.entity.Role;

@RestController
public class RoleController {

	@Autowired
	private RoleService roleService;

	@GetMapping("roles")
	public List<Role> getRoles() {
		return roleService.getRoles();
	}

	@PostMapping("role")
	public Role setRole(@RequestBody Role role) {
		return roleService.setRole(role);
	}
}
