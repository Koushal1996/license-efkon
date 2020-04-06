package com.nxtlife.efkon.license.service;

import com.nxtlife.efkon.license.entity.project.Project;
import com.nxtlife.efkon.license.view.project.ProjectRequest;
import com.nxtlife.efkon.license.view.project.ProjectResponse;

import java.util.List;


public interface ProjectService {

    /**
     * this method used to save the project
     *
     * @throws ValidationException
     *              if project type id or project manager id not found
     *
     * @return {@Link ProjectResponse}
     */

    public ProjectResponse save(ProjectRequest request);



    /**
     * this method used to fetch all projects
     *
     * @return list of <tt>ProjectResponse</tt>
     */
    public List<ProjectResponse> findAll();




}
