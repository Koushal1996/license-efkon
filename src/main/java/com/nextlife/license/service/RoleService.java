package com.nextlife.license.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nxtlife.efkon.license.entity.Role;
import com.nxtlife.efkon.license.repository.RoleRepo;

@Service
public class RoleService {

	@Autowired
	public RoleRepo roleRepo;

	public List<Role> getRoles() {
		return roleRepo.findAll();
	}

	public Role setRole(Role role) {
		return roleRepo.save(role);
	}

}
