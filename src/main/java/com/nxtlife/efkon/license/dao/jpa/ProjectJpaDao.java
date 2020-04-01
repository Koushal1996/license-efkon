package com.nxtlife.efkon.license.dao.jpa;

import com.nxtlife.efkon.license.entity.project.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ProjectJpaDao extends JpaRepository<Project, Long> {
	
	public Project findByCustomerName(String name);

}
