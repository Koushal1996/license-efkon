package com.nxtlife.efkon.license.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.nxtlife.efkon.license.entity.ProjectType;
import com.nxtlife.efkon.license.service.ProjectTypeService;

@RestController
public class ProjectTypeController {

	@Autowired
	ProjectTypeService service;

	@GetMapping("projecttype")
	public List<ProjectType> getAllProjectType() {

		return service.getAllProjectType();

	}

	@PostMapping("projecttype")
	public void saveProjectType(@RequestBody ProjectType projectType) {

		service.saveProjectType(projectType);

	}
}
