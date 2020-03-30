package com.nxtlife.efkon.license.entity.product;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import com.nxtlife.efkon.license.entity.common.BaseEntity;

@SuppressWarnings("serial")
@Entity
@Table(name = "product_code")
@DynamicInsert(value = true)
@DynamicUpdate(value = true)
public class ProductCode extends BaseEntity implements Serializable {

	@NotNull(message = "name can't be null")
	private String name;

	@ManyToOne
	private ProductFamily productFamily;

	@OneToMany(mappedBy = "productCode", cascade = CascadeType.ALL)
	private Set<ProductDetail> productDetails;

	public ProductCode() {
		super();
	}

	public ProductCode(@NotNull(message = "name can't be null") String name) {
		super();
		this.name = name;
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
