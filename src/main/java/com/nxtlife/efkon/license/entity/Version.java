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
@Table(name = "version")
@DynamicInsert(value = true)
@DynamicUpdate(value = true)
public class Version extends BaseEntity implements Serializable {

	@Column(unique = true, nullable = false)
	private String version;

	@OneToMany(mappedBy = "version", cascade = CascadeType.ALL)
	private Set<ProductDetail> productDetails;

	public Version() {
		super();
	}

	public Version(String version, Set<ProductDetail> productDetails) {
		super();
		this.version = version;
		this.productDetails = productDetails;
	}

	public String getVersion() {
		return version;
	}

	public void setVersion(String version) {
		this.version = version;
	}

	public Set<ProductDetail> getProductDetails() {
		return productDetails;
	}

	public void setProductDetails(Set<ProductDetail> productDetails) {
		this.productDetails = productDetails;
	}

}
