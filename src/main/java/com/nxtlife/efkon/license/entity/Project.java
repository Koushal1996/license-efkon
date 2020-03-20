package com.nxtlife.efkon.license.entity;

import java.sql.Date;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

@Entity
public class Project {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(unique = true, nullable = false)
	private String customerName;
	
	@Column(unique = true)
	private String customerEmail;
	
	@Column(unique = true)
	private String customerPhoneNumber;
	
	@Column(nullable = false)
	private String emailSendStatus;
	
	@CreationTimestamp
	private Date createdAt;

	private String createdBy;

	@UpdateTimestamp
	private Date modifiedAt;

	private String modifiedBy;
	
	@ManyToOne
	private ProjectType projectType;
	
	@OneToMany(mappedBy = "project", cascade = CascadeType.ALL)
	private Set<ProjectProduct> projectProducts;

	public Project() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Project(Long id, String customerName, String customerEmail, String customerPhoneNumber,
			String emailSendStatus, Date createdAt, String createdBy, Date modifiedAt, String modifiedBy,
			ProjectType projectType, Set<ProjectProduct> projectProducts) {
		super();
		this.id = id;
		this.customerName = customerName;
		this.customerEmail = customerEmail;
		this.customerPhoneNumber = customerPhoneNumber;
		this.emailSendStatus = emailSendStatus;
		this.createdAt = createdAt;
		this.createdBy = createdBy;
		this.modifiedAt = modifiedAt;
		this.modifiedBy = modifiedBy;
		this.projectType = projectType;
		this.projectProducts = projectProducts;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public String getCustomerEmail() {
		return customerEmail;
	}

	public void setCustomerEmail(String customerEmail) {
		this.customerEmail = customerEmail;
	}

	public String getCustomerPhoneNumber() {
		return customerPhoneNumber;
	}

	public void setCustomerPhoneNumber(String customerPhoneNumber) {
		this.customerPhoneNumber = customerPhoneNumber;
	}

	public String getEmailSendStatus() {
		return emailSendStatus;
	}

	public void setEmailSendStatus(String emailSendStatus) {
		this.emailSendStatus = emailSendStatus;
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

	public ProjectType getProjectType() {
		return projectType;
	}

	public void setProjectType(ProjectType projectType) {
		this.projectType = projectType;
	}

	public Set<ProjectProduct> getProjectProducts() {
		return projectProducts;
	}

	public void setProjectProducts(Set<ProjectProduct> projectProducts) {
		this.projectProducts = projectProducts;
	}
	
}
