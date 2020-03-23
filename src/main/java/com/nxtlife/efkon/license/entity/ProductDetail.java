package com.nxtlife.efkon.license.entity;

import java.io.Serializable;
import java.sql.Date;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.UpdateTimestamp;

import com.nxtlife.efkon.license.entity.common.BaseEntity;

@SuppressWarnings("serial")
@Entity
@Table(name = "product_detail")
@DynamicInsert(value = true)
@DynamicUpdate(value = true)
public class ProductDetail extends BaseEntity implements Serializable {

	@ManyToOne(cascade = CascadeType.ALL)
	private ProductCode productCode;

	@ManyToOne(cascade = CascadeType.ALL)
	private ProductFamily productFamily;

	@ManyToOne(cascade = CascadeType.ALL)
	private Version version;

	@OneToMany(mappedBy = "productDetail", cascade = CascadeType.ALL)
	private Set<ProjectProduct> projectProducts;

	public ProductDetail() {
		super();
	}

	public ProductDetail(ProductCode productCode, ProductFamily productFamily, Version version,
			Set<ProjectProduct> projectProducts) {
		super();
		this.productCode = productCode;
		this.productFamily = productFamily;
		this.version = version;
		this.projectProducts = projectProducts;
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

	public Set<ProjectProduct> getProjectProducts() {
		return projectProducts;
	}

	public void setProjectProducts(Set<ProjectProduct> projectProducts) {
		this.projectProducts = projectProducts;
	}

}
