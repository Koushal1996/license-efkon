package com.nxtlife.efkon.license.entity;

import java.sql.Date;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

@Entity
public class ProductDetail {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@ManyToOne(cascade = CascadeType.ALL)
	private ProductCode productCode;

	@ManyToOne(cascade = CascadeType.ALL)
	private ProductFamily productFamily;

	@ManyToOne(cascade = CascadeType.ALL)
	private Version version;

	@CreationTimestamp
	private Date createdAt;

	private String createdBy;

	@UpdateTimestamp
	private Date modifiedAt;

	private String modifiedBy;
	
	@OneToMany(mappedBy = "productDetail", cascade = CascadeType.ALL)
	private Set<ProjectProduct> projectProducts;

	public ProductDetail() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ProductDetail(Long id, ProductCode productCode, ProductFamily productFamily, Version version, Date createdAt,
			String createdBy, Date modifiedAt, String modifiedBy, Set<ProjectProduct> projectProducts) {
		super();
		this.id = id;
		this.productCode = productCode;
		this.productFamily = productFamily;
		this.version = version;
		this.createdAt = createdAt;
		this.createdBy = createdBy;
		this.modifiedAt = modifiedAt;
		this.modifiedBy = modifiedBy;
		this.projectProducts = projectProducts;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public ProductCode getProductCode() {
		return productCode;
	}

	public void setProductCode(ProductCode productCode) {
		this.productCode = productCode;
	}

	public ProductFamily getProductFamily() {
		return productFamily;
	}

	public void setProductFamily(ProductFamily productFamily) {
		this.productFamily = productFamily;
	}

	public Version getVersion() {
		return version;
	}

	public void setVersion(Version version) {
		this.version = version;
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

	public Set<ProjectProduct> getProjectProducts() {
		return projectProducts;
	}

	public void setProjectProducts(Set<ProjectProduct> projectProducts) {
		this.projectProducts = projectProducts;
	}

}
