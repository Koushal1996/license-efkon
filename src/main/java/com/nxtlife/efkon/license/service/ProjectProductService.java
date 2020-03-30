package com.nxtlife.efkon.license.service;

import java.util.List;

import com.nxtlife.efkon.license.entity.ProjectProduct;

public interface ProjectProductService {

	public void saveProjectProduct(ProjectProduct projectProduct);

	/**
	 * this method used to fetch all ProjectProduct
	 * 
	 * @return list of <tt>ProjectProduct</tt>
	 */
	public List<ProjectProduct> getAllProjectProduct();

}
