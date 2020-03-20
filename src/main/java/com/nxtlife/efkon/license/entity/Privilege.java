package com.nxtlife.efkon.license.entity;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

@Entity
public class Privilege {

	@Id
	private Long id;

	@Column(unique = true)
	private String name;

	private String description;

	private String active;
	
	@ManyToMany(mappedBy = "privileges")
	private Set<Role> roles;

	public Privilege() {
		super();
	}

	public Privilege(Long id, String name, String description, String active, Set<Role> roles) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.active = active;
		this.roles = roles;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getActive() {
		return active;
	}

	public void setActive(String active) {
		this.active = active;
	}

	public Set<Role> getRoles() {
		return roles;
	}

	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}

}
