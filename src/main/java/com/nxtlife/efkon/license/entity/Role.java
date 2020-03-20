package com.nxtlife.efkon.license.entity;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

@Entity
public class Role {

	@Id
	private Long id;

	@Column(unique = true)
	private String name;

	private String description;

	private String active;
	
	@ManyToMany(cascade = CascadeType.ALL)
	private Set<User> users;
	
	@ManyToMany(cascade = CascadeType.ALL)
	private Set<Privilege> privileges;

	public Role() {
		super();
	}

	public Role(Long id, String name, String description, String active, Set<User> users, Set<Privilege> privileges) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.active = active;
		this.users = users;
		this.privileges = privileges;
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

	public Set<User> getUsers() {
		return users;
	}

	public void setUsers(Set<User> users) {
		this.users = users;
	}

	public Set<Privilege> getPrivileges() {
		return privileges;
	}

	public void setPrivileges(Set<Privilege> privileges) {
		this.privileges = privileges;
	}

}
