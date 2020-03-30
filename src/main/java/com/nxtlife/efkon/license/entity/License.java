package com.nxtlife.efkon.license.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import com.nxtlife.efkon.license.entity.common.BaseEntity;

@SuppressWarnings("serial")
@Entity
@Table(name = "license")
@DynamicInsert(value = true)
@DynamicUpdate(value = true)
public class License extends BaseEntity implements Serializable {

	@Column(nullable = false)
	private Long licenseCode;

	private Long uniqueAccessId;

	@Column(unique = true)
	private Long generatedKey;

	private String name;

	@Column(nullable = false)
	private String licenseStatus;

	@ManyToOne
	private ProjectProduct projectProduct;

	public License() {
		super();
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

	public ProjectProduct getProjectProduct() {
		return projectProduct;
	}

	public void setProjectProduct(ProjectProduct projectProduct) {
		this.projectProduct = projectProduct;
	}

}
