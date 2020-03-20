package com.nxtlife.efkon.license.entity;

import java.sql.Date;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

@Entity
public class ProductCode {
	
	@Id
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
	
	@ManyToOne
	private ProductFamily productFamily;
	
	@OneToMany(mappedBy = "productCode", cascade = CascadeType.ALL)
	private Set<ProductDetail> productDetails;

	public ProductCode() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ProductCode(Long id, String name, String active, Date createdAt, String createdBy, Date modifiedAt,
			String modifiedBy, ProductFamily productFamily, Set<ProductDetail> productDetails) {
		super();
		this.id = id;
		this.name = name;
		this.active = active;
		this.createdAt = createdAt;
		this.createdBy = createdBy;
		this.modifiedAt = modifiedAt;
		this.modifiedBy = modifiedBy;
		this.productFamily = productFamily;
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

	public ProductFamily getProductFamily() {
		return productFamily;
	}

	public void setProductFamily(ProductFamily productFamily) {
		this.productFamily = productFamily;
	}

	public Set<ProductDetail> getProductDetails() {
		return productDetails;
	}

	public void setProductDetails(Set<ProductDetail> productDetails) {
		this.productDetails = productDetails;
	}

}
