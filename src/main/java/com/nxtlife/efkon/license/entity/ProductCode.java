package com.nxtlife.efkon.license.entity;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import com.nxtlife.efkon.license.entity.common.BaseEntity;

@SuppressWarnings("serial")
@Entity
@Table(name = "product_code")
@DynamicInsert(value = true)
@DynamicUpdate(value = true)
public class ProductCode extends BaseEntity implements Serializable {

	@Column(unique = true, nullable = false)
	private String name;

	@ManyToOne
	private ProductFamily productFamily;

	@OneToMany(mappedBy = "productCode", cascade = CascadeType.ALL)
	private Set<ProductDetail> productDetails;

	public ProductCode() {
		super();
	}

	public ProductCode(String name, ProductFamily productFamily, Set<ProductDetail> productDetails) {
		super();
		this.name = name;
		this.productFamily = productFamily;
		this.productDetails = productDetails;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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
