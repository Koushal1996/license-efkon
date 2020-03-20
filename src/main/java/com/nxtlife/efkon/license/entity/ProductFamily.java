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
public class ProductFamily {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(unique = true, nullable = false)
	private String name;
	
	private String active;
	
	@CreationTimestamp
	private Date createdAt;
	
	private String createdBy;
	
	@UpdateTimestamp
	private Date modifiedAt;
	
	private String modifiedBy;
	
	@OneToMany(mappedBy = "productFamily", cascade = CascadeType.ALL)
	private Set<ProductCode> productCodes;
	
	@OneToMany(mappedBy = "productFamily", cascade = CascadeType.ALL)
	private Set<ProductDetail> productDetails;

	public ProductFamily() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ProductFamily(Long id, String name, String active, Date createdAt, String createdBy, Date modifiedAt,
			String modifiedBy, Set<ProductCode> productCodes, Set<ProductDetail> productDetails) {
		super();
		this.id = id;
		this.name = name;
		this.active = active;
		this.createdAt = createdAt;
		this.createdBy = createdBy;
		this.modifiedAt = modifiedAt;
		this.modifiedBy = modifiedBy;
		this.productCodes = productCodes;
		this.productDetails = productDetails;
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

	public Set<ProductCode> getProductCodes() {
		return productCodes;
	}

	public void setProductCodes(Set<ProductCode> productCodes) {
		this.productCodes = productCodes;
	}

	public Set<ProductDetail> getProductDetails() {
		return productDetails;
	}

	public void setProductDetails(Set<ProductDetail> productDetails) {
		this.productDetails = productDetails;
	}

}
