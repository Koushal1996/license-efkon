package com.nxtlife.efkon.license.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nxtlife.efkon.license.dao.ProjectDao;
import com.nxtlife.efkon.license.entity.Project;

@Service
public class ProjectService {

	@Autowired
	ProjectDao projectDao;

	public void saveProject(Project project) {

		projectDao.save(project);

	}

	public List<Project> getAllProject() {

		return projectDao.findAll();

	}
}
