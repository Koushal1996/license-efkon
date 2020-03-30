package com.nxtlife.efkon.license.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nxtlife.efkon.license.dao.ProjectDao;
import com.nxtlife.efkon.license.dao.ProjectProductDao;
import com.nxtlife.efkon.license.dao.ProjectTypeDao;
import com.nxtlife.efkon.license.entity.Project;
import com.nxtlife.efkon.license.entity.ProjectProduct;

@Service
public class ProjectProductService {

	@Autowired
	ProjectProductDao productDao;
	
	@Autowired
	ProjectDao projectDao;

	public void saveProjectProduct(ProjectProduct projectProduct) {
		
		Project project = projectDao.findByCustomerName(projectProduct.getProject().getCustomerName());
		
		if(project != null) {
			projectProduct.getProject().setId(project.getId());
		}

		productDao.save(projectProduct);

	}

	public List<ProjectProduct> getAllProject() {

		return productDao.findAll();

	}
}
