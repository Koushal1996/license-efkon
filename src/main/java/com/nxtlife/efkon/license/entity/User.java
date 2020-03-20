package com.nxtlife.efkon.license.entity;

import java.sql.Date;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

@Entity
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(unique = true)
	private String userName;

	@Column(unique = true)
	private String name;
	
	@Column(unique = true)
	private String email;
	
	@Column(unique = true)
	private long phoneNumber;
	
	@Column(unique = true)
	private long password;
	
	private String emailSendStatus;
	
	private String active;
	
	@Column(updatable = false)		//it is only optimize the query but it doesn't mean we an't update if we set createdAt also then it will also come in query.
	@CreationTimestamp				// get system time.
	private Date createdAt;
	private String createdBy;
	@UpdateTimestamp
	private Date modifiedAt;
	private String modifiedBy;
	
	@ManyToMany(mappedBy = "users") // in bidirectional we need to map the column otherwise it will create 2 tables for mapping
	private Set<Role> roles;

	public User() {
		super();
	}

	public User(long id, String userName, String name, String email, long phoneNumber, long password,
			String emailSendStatus, String active, Date createdAt, String createdBy, Date modifiedAt, String modifiedBy,
			Set<Role> roles) {
		super();
		this.id = id;
		this.userName = userName;
		this.name = name;
		this.email = email;
		this.phoneNumber = phoneNumber;
		this.password = password;
		this.emailSendStatus = emailSendStatus;
		this.active = active;
		this.createdAt = createdAt;
		this.createdBy = createdBy;
		this.modifiedAt = modifiedAt;
		this.modifiedBy = modifiedBy;
		this.roles = roles;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public long getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(long phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public long getPassword() {
		return password;
	}

	public void setPassword(long password) {
		this.password = password;
	}

	public String getEmailSendStatus() {
		return emailSendStatus;
	}

	public void setEmailSendStatus(String emailSendStatus) {
		this.emailSendStatus = emailSendStatus;
	}

	public String getActive() {
		return active;
	}

	public void setActive(String active) {
		this.active = active;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public String getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}

	public Date getModifiedAt() {
		return modifiedAt;
	}

	public void setModifiedAt(Date modifiedAt) {
		this.modifiedAt = modifiedAt;
	}

	public String getModifiedBy() {
		return modifiedBy;
	}

	public void setModifiedBy(String modifiedBy) {
		this.modifiedBy = modifiedBy;
	}

	public Set<Role> getRoles() {
		return roles;
	}

	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}



}
