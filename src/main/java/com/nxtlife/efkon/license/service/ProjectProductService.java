package com.nxtlife.efkon.license.service;

import com.nxtlife.efkon.license.entity.project.product.ProjectProduct;

import java.util.List;


public interface ProjectProductService {

    public void saveProjectProduct(ProjectProduct projectProduct);

    /**
     * this method used to fetch all ProjectProduct
     *
     * @return list of <tt>ProjectProduct</tt>
     */
    public List<ProjectProduct> getAllProjectProduct();

}
