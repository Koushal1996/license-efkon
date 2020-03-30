package com.nxtlife.efkon.license.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nxtlife.efkon.license.dao.ProjectTypeDao;
import com.nxtlife.efkon.license.entity.ProjectType;
import com.nxtlife.efkon.license.service.ProjectTypeService;

@Service("projectTypeServiceImpl")
@Transactional
public class ProjectTypeServiceImpl implements ProjectTypeService {

	@Autowired
	ProjectTypeDao typeDao;

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
