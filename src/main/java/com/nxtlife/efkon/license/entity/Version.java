package com.nxtlife.efkon.license.entity;

import java.sql.Date;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

@Entity
public class Version {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(unique = true, nullable = false)
	private String version;
	
	private String active;
	
	@CreationTimestamp
	private Date createdAt;
	
	private String createdBy;
	
	@UpdateTimestamp
	private Date modifiedAt;
	
	private String modifiedBy;
	
	@OneToMany(mappedBy = "version", cascade = CascadeType.ALL)
	private Set<ProductDetail> productDetails;

	public Version() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Version(Long id, String version, String active, Date createdAt, String createdBy, Date modifiedAt,
			String modifiedBy, Set<ProductDetail> productDetails) {
		super();
		this.id = id;
		this.version = version;
		this.active = active;
		this.createdAt = createdAt;
		this.createdBy = createdBy;
		this.modifiedAt = modifiedAt;
		this.modifiedBy = modifiedBy;
		this.productDetails = productDetails;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getVersion() {
		return version;
	}

	public void setVersion(String version) {
		this.version = version;
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

	public Set<ProductDetail> getProductDetails() {
		return productDetails;
	}

	public void setProductDetails(Set<ProductDetail> productDetails) {
		this.productDetails = productDetails;
	}
	
}
