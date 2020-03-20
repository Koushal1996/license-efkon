package com.nextlife.license.view;

import java.util.HashSet;
import java.util.Set;

import com.nxtlife.efkon.license.entity.ProductCode;
import com.nxtlife.efkon.license.entity.ProductFamily;

public class ProductFamilyRequest {
	
	private String name;
	
	private String active;
	
	private Set<ProductCode> productCodes;
	
	public ProductFamily toEntity() {
		ProductFamily productFamily = new ProductFamily();
		productFamily.setName(this.getName());
		productFamily.setActive(this.getActive());
		productFamily.setProductCodes(this.getProductCodes());
		return productFamily;
	}

	public ProductFamilyRequest() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ProductFamilyRequest(String name, String active, Set<ProductCode> productCodes) {
		super();
		this.name = name;
		this.active = active;
		this.productCodes = productCodes;
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

	public Set<ProductCode> getProductCodes() {
		return productCodes;
	}

	public void setProductCodes(Set<ProductCode> productCodes) {
		this.productCodes = productCodes;
	}

}
