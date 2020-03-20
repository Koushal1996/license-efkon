package com.nxtlife.efkon.license.entity;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

@Entity
public class License {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(nullable = false)
	private Long licenseCode;
	
	private Long uniqueAccessId;
	
	@Column(unique = true)
	private Long generatedKey;
	
	private String name;
	
	@Column(nullable = false)
	private String licenseStatus;
	
	@Column(nullable = false)
	private String active;

	@CreationTimestamp
	private Date createdAt;

	private String createdBy;

	@UpdateTimestamp
	private Date modifiedAt;

	private String modifiedBy;
	
	@ManyToOne
	private ProjectProduct projectProduct;

	public License() {
		super();
		// TODO Auto-generated constructor stub
	}

	public License(Long id, Long licenseCode, Long uniqueAccessId, Long generatedKey, String name, String licenseStatus,
			String active, Date createdAt, String createdBy, Date modifiedAt, String modifiedBy,
			ProjectProduct projectProduct) {
		super();
		this.id = id;
		this.licenseCode = licenseCode;
		this.uniqueAccessId = uniqueAccessId;
		this.generatedKey = generatedKey;
		this.name = name;
		this.licenseStatus = licenseStatus;
		this.active = active;
		this.createdAt = createdAt;
		this.createdBy = createdBy;
		this.modifiedAt = modifiedAt;
		this.modifiedBy = modifiedBy;
		this.projectProduct = projectProduct;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getLicenseCode() {
		return licenseCode;
	}

	public void setLicenseCode(Long licenseCode) {
		this.licenseCode = licenseCode;
	}

	public Long getUniqueAccessId() {
		return uniqueAccessId;
	}

	public void setUniqueAccessId(Long uniqueAccessId) {
		this.uniqueAccessId = uniqueAccessId;
	}

	public Long getGeneratedKey() {
		return generatedKey;
	}

	public void setGeneratedKey(Long generatedKey) {
		this.generatedKey = generatedKey;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLicenseStatus() {
		return licenseStatus;
	}

	public void setLicenseStatus(String licenseStatus) {
		this.licenseStatus = licenseStatus;
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

	public ProjectProduct getProjectProduct() {
		return projectProduct;
	}

	public void setProjectProduct(ProjectProduct projectProduct) {
		this.projectProduct = projectProduct;
	}
	
}
