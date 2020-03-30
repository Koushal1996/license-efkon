package com.nxtlife.efkon.license.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nxtlife.efkon.license.dao.ProjectDao;
import com.nxtlife.efkon.license.dao.ProjectProductDao;
import com.nxtlife.efkon.license.entity.Project;
import com.nxtlife.efkon.license.entity.ProjectProduct;
import com.nxtlife.efkon.license.service.ProjectProductService;

@Service("projectProductServiceImpl")
@Transactional
public class ProjectProductServiceImpl implements ProjectProductService {

	@Autowired
	ProjectProductDao productDao;

	@Autowired
	ProjectDao projectDao;

	/**
	 * save the ProjectProduct
	 *
	 * @Param projectProduct call save method of jpa
	 * @return <tt>null</tt>
	 */
	public void saveProjectProduct(ProjectProduct projectProduct) {

		Project project = projectDao.findByCustomerName(projectProduct.getProject().getCustomerName());

		if (project != null) {
			projectProduct.getProject().setId(project.getId());
		}

		productDao.save(projectProduct);

	}

	/**
	 * return a list of ProjectProduct. call findAll() method of jpa which return list
	 * of objects
	 *
	 *
	 * @return List of <tt>ProjectProduct</tt>
	 */
	public List<ProjectProduct> getAllProjectProduct() {

		return productDao.findAll();

	}

}
