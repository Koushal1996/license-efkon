package com.nxtlife.efkon.license.view;

import java.util.Set;

import com.nxtlife.efkon.license.entity.ProductCode;
import com.nxtlife.efkon.license.entity.ProductFamily;

public class ProductFamilyRequest {
	
	private String name;
		
	private Set<ProductCode> productCodes;
	
	public ProductFamily toEntity() {
		ProductFamily productFamily = new ProductFamily();
		productFamily.setName(this.getName());
		productFamily.setProductCodes(this.getProductCodes());
		return productFamily;
	}

	public ProductFamilyRequest() {
		super();
	}

	public ProductFamilyRequest(String name, String active, Set<ProductCode> productCodes) {
		super();
		this.name = name;
		this.productCodes = productCodes;
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

}
