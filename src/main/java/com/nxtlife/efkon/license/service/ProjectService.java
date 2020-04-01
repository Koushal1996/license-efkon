package com.nxtlife.efkon.license.service;

import com.nxtlife.efkon.license.entity.project.Project;

import java.util.List;


public interface ProjectService {

    public void saveProject(Project project);

    /**
     * this method used to fetch all projects
     *
     * @return list of <tt>Project</tt>
     */
    public List<Project> getAllProject();

}
