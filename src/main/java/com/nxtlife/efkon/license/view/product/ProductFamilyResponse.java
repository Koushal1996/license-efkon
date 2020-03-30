package com.nxtlife.efkon.license.view.product;

import com.nxtlife.efkon.license.entity.product.ProductCode;
import com.nxtlife.efkon.license.entity.product.ProductFamily;

import java.util.HashSet;
import java.util.Set;


public class ProductFamilyResponse {

	private Long id;

	private String name;

	private Set<ProductCodeResponse> productCodes;

	public ProductFamilyResponse(Long id, String name) {
		super();
		this.id = id;
		this.name = name;
	}

	public ProductFamilyResponse(ProductFamily productFamily) {
		if (productFamily != null) {
			this.id = productFamily.getId();
			this.name = productFamily.getName();
			this.productCodes =new HashSet<>();
			for(ProductCode code : productFamily.getProductCodes()) {
				this.productCodes.add(new ProductCodeResponse(code));
			}
		}
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

	public Set<ProductCodeResponse> getProductCodes() {
		return productCodes;
	}

	public void setProductCodes(Set<ProductCodeResponse> productCodes) {
		this.productCodes = productCodes;
	}

}
