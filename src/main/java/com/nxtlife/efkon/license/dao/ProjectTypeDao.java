package com.nxtlife.efkon.license.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nxtlife.efkon.license.entity.ProjectType;
import com.nxtlife.efkon.license.entity.user.Role;

@Repository
public interface ProjectTypeDao extends JpaRepository<ProjectType, Long> {

	public ProjectType findByName(String name);
}
