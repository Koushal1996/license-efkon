package com.nxtlife.efkon.license.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.nxtlife.efkon.license.entity.Project;
import com.nxtlife.efkon.license.service.ProjectService;

@RestController
public class ProjectController {

	@Autowired
	ProjectService projectService;

	@PostMapping("project")
	public void saveProject(@RequestBody Project project) {

		projectService.saveProject(project);

	}

	@GetMapping("project")
	public List<Project> getAllProject() {

		return projectService.getAllProject();

	}

}
