package com.nxtlife.efkon.license.entity;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import com.nxtlife.efkon.license.entity.common.BaseEntity;

@SuppressWarnings("serial")
@Entity
@Table(name = "project_type")
@DynamicInsert(value = true)
@DynamicUpdate(value = true)
public class ProjectType extends BaseEntity implements Serializable {

	@Column(unique = true, nullable = false)
	private String name;

	@OneToMany(mappedBy = "projectType", cascade = CascadeType.ALL)
	private Set<Project> projects;

	public ProjectType() {
		super();
	}

	public ProjectType(String name, Set<Project> projects) {
		super();
		this.name = name;
		this.projects = projects;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Set<Project> getProjects() {
		return projects;
	}

	public void setProjects(Set<Project> projects) {
		this.projects = projects;
	}

}
