package com.nxtlife.efkon.license.service.impl;

import java.util.List;

import com.nxtlife.efkon.license.dao.jpa.ProjectJpaDao;
import com.nxtlife.efkon.license.entity.project.Project;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import com.nxtlife.efkon.license.service.ProjectService;

@Service("projectServiceImpl")
@Transactional
public class ProjectServiceImpl implements ProjectService {

	@Autowired
	ProjectJpaDao projectDao;

	/**
	 * save the Project
	 *
	 * @Param project call save method of jpa
	 * @return <tt>null</tt>
	 */
	@Override
	public void saveProject(Project project) {

		projectDao.save(project);

	}

	/**
	 * return a list of projects. call findAll() method of jpa which return list of
	 * objects
	 *
	 *
	 * @return List of <tt>Project</tt>
	 */
	@Override
	public List<Project> getAllProject() {

		return projectDao.findAll();

	}

}