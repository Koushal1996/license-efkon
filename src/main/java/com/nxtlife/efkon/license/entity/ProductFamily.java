package com.nxtlife.efkon.license.entity;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import com.nxtlife.efkon.license.entity.common.BaseEntity;

@SuppressWarnings("serial")
@Entity
@Table(name = "product_family")
@DynamicInsert(value = true)
@DynamicUpdate(value = true)
public class ProductFamily extends BaseEntity implements Serializable {

	@Column(unique = true, nullable = false)
	private String name;

	@OneToMany(mappedBy = "productFamily", cascade = CascadeType.ALL)
	private Set<ProductCode> productCodes;

	@OneToMany(mappedBy = "productFamily", cascade = CascadeType.ALL)
	private Set<ProductDetail> productDetails;

	public ProductFamily() {
		super();
	}

	public ProductFamily(String name, Set<ProductCode> productCodes, Set<ProductDetail> productDetails) {
		super();
		this.name = name;
		this.productCodes = productCodes;
		this.productDetails = productDetails;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + ((productCodes == null) ? 0 : productCodes.hashCode());
		result = prime * result + ((productDetails == null) ? 0 : productDetails.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ProductFamily other = (ProductFamily) obj;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (productCodes == null) {
			if (other.productCodes != null)
				return false;
		} else if (!productCodes.equals(other.productCodes))
			return false;
		if (productDetails == null) {
			if (other.productDetails != null)
				return false;
		} else if (!productDetails.equals(other.productDetails))
			return false;
		return true;
	}

}
