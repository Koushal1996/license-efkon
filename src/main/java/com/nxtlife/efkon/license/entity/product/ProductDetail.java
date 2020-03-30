package com.nxtlife.efkon.license.entity.product;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;


import com.nxtlife.efkon.license.entity.project.product.ProjectProduct;
import com.nxtlife.efkon.license.entity.version.Version;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import com.nxtlife.efkon.license.entity.common.BaseEntity;

@SuppressWarnings("serial")
@Entity
@Table(name = "product_detail")
@DynamicInsert(value = true)
@DynamicUpdate(value = true)
public class ProductDetail extends BaseEntity implements Serializable {

	@ManyToOne
	private ProductCode productCode;

	@ManyToOne
	private ProductFamily productFamily;

	@ManyToOne
	private Version version;

	@OneToMany(mappedBy = "productDetail", cascade = CascadeType.ALL)
	private Set<ProjectProduct> projectProducts;


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
