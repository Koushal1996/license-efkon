package com.nxtlife.efkon.license.service;

import com.nxtlife.efkon.license.entity.project.ProjectType;

import java.util.List;


public interface ProjectTypeService {

    public void saveProjectType(ProjectType projectType);

    /**
     * this method used to fetch all projectTypes
     *
     * @return list of <tt>ProjectType</tt>
     */
    public List<ProjectType> getAllProjectType();

}
