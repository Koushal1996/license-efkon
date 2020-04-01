package com.nxtlife.efkon.license.service.impl;

import java.util.List;

import com.nxtlife.efkon.license.dao.jpa.ProjectTypeJpaDao;
import com.nxtlife.efkon.license.entity.project.ProjectType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nxtlife.efkon.license.service.ProjectTypeService;

@Service("projectTypeServiceImpl")
@Transactional
public class ProjectTypeServiceImpl implements ProjectTypeService {

	@Autowired
	ProjectTypeJpaDao typeDao;

	/**
	 * save the ProjectType
	 *
	 * @Param projectType call save method of jpa
	 * @return <tt>null</tt>
	 */
	@Override
	public void saveProjectType(ProjectType projectType) {

		typeDao.save(projectType);

	}

	/**
	 * return a list of projectTypes. call findAll() method of jpa which return
	 * list of objects
	 *
	 *
	 * @return List of <tt>ProjectType</tt>
	 */
	@Override
	public List<ProjectType> getAllProjectType() {

		return typeDao.findAll();

	}

}
