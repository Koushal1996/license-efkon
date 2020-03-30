package com.nxtlife.efkon.license.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nxtlife.efkon.license.dao.ProjectTypeDao;
import com.nxtlife.efkon.license.entity.ProjectType;

@Service
public class ProjectTypeService {

	@Autowired
	ProjectTypeDao typeDao;

	public void saveProjectType(ProjectType projectType) {

		typeDao.save(projectType);

	}

	public List<ProjectType> getAllProjectType() {

		return typeDao.findAll();

	}

}
