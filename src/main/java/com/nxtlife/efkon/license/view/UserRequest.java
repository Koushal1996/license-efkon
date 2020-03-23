package com.nxtlife.efkon.license.view;

import java.sql.Date;

import org.hibernate.annotations.CreationTimestamp;

public class UserRequest {

	private String name;
	private String userName;
	private String email;
	private long phoneNumber;
	private long password;
	private String emailSendStatus;
	private String active;
	private String createdBy;
	private Date modifiedAt;
	private String modifiedBy;

	public UserRequest() {
		super();
	}

	public UserRequest(String name, String userName, String email, long phoneNumber, long password,
			String emailSendStatus, String active, String createdBy, Date modifiedAt, String modifiedBy) {
		super();
		this.name = name;
		this.userName = userName;
		this.email = email;
		this.phoneNumber = phoneNumber;
		this.password = password;
		this.emailSendStatus = emailSendStatus;
		this.active = active;
		this.createdBy = createdBy;
		this.modifiedAt = modifiedAt;
		this.modifiedBy = modifiedBy;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
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

}
