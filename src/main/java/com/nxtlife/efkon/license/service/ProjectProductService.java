package com.nxtlife.efkon.license.service;

import com.nxtlife.efkon.license.ex.NotFoundException;
import com.nxtlife.efkon.license.ex.ValidationException;
import com.nxtlife.efkon.license.view.SuccessResponse;
import com.nxtlife.efkon.license.view.project.product.ProjectProductRequest;
import com.nxtlife.efkon.license.view.project.product.ProjectProductResponse;

import java.util.List;


public interface ProjectProductService {

    /**
     * this method used to save product in a particular project.
     *
     * @param
     * @param request
     * @return {@link ProjectProductResponse} after saving product  information in project
     * @throws ValidationException if project or product not exist or project and product ids already exist in project product
     */
    public ProjectProductResponse save(ProjectProductRequest request);

    /**
     * this method used to update product detail and license detail in a particular project.
     *
     * @param id
     * @param request
     * @return {@link ProjectProductResponse} after updating product  information in project
     * @throws ValidationException                            if project or product not exist and product ids already exist in project product
     * @throws com.nxtlife.efkon.license.ex.NotFoundException if project product id is not found
     */
    public ProjectProductResponse update(Long id, ProjectProductRequest request);


    /**
     * this method used to fetch all Project products
     *
     * @return list of <tt>ProjectProductResponse</tt>
     */
    public List<ProjectProductResponse> findAll();

    /**
     * this method used to delete product in project. It throws exception if project product id not found
     *
     * @param id
     * @return {@link SuccessResponse} if product  deleted successfully
     * @throws NotFoundException if project product not found
     */
    public SuccessResponse delete(Long id);

}
