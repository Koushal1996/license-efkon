package com.nxtlife.efkon.license.service;

import java.util.List;

import com.nxtlife.efkon.license.entity.Project;

public interface ProjectService {

	public void saveProject(Project project);

	/**
	 * this method used to fetch all projects
	 * 
	 * @return list of <tt>Project</tt>
	 */
	public List<Project> getAllProject();
	
}
