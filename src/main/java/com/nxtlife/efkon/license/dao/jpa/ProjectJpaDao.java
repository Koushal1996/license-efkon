package com.nxtlife.efkon.license.dao.jpa;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.nxtlife.efkon.license.entity.project.Project;
import com.nxtlife.efkon.license.view.project.ProjectResponse;

@Repository
public interface ProjectJpaDao extends JpaRepository<Project, Long> {

	public Boolean existsByIdAndActive(Long id, Boolean active);

	public Project findByCustomerName(String name);

	public ProjectResponse findResponseById(Long id);

	public List<ProjectResponse> findByActive(Boolean active);

	public List<ProjectResponse> findByCustomerEmailAndActive(String customerEmail, Boolean active);

	public List<ProjectResponse> findByProjectManagerIdAndActive(Long projectManagerId, Boolean active);

	public Boolean existsByCustomerContactNoAndActive(String customerContactNo, Boolean active);

	public ProjectResponse findByIdAndActive(Long unmaskProjectId, Boolean active);

	public ProjectResponse findByCustomerContactNoAndActive(String customerContactNo, boolean b);

	@Modifying
	@Query(value = "update Project set customerContactNo=?2, customerEmail=?3,isEmailSend=?4, customerName=?5, projectManager.id=?6, projectType.id=?7, modifiedBy.id =?8, modifiedAt =?9 where id =?1")
	public int update(Long unmaskId, String customerContactNo, String customerEmail, Boolean isEmailSend,
			String customerName, Long projectManagerId, Long projectTypeId, Long userId, Date date);

}
