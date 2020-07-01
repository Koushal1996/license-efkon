package com.nxtlife.efkon.license.service;

import java.util.List;

import com.nxtlife.efkon.license.view.SuccessResponse;
import com.nxtlife.efkon.license.view.project.ProjectTypeResponse;

public interface ProjectTypeService {

	/**
	 * this method used to save project type
	 * 
	 * @param projectType
	 * @return {@link ProjectTypeResponse}
	 */
	public ProjectTypeResponse save(String projectType);

	/**
	 * this method used to fetch all projectTypes
	 *
	 * @return list of <tt>ProjectTypeResponse</tt>
	 */
	public List<ProjectTypeResponse> findAll();

	/**
	 * this project type has been deleted
	 * 
	 * @param id
	 * @return {@link SuccessResponse}
	 */
	public SuccessResponse delete(Long id);

}
