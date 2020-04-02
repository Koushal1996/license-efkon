package com.nxtlife.efkon.license.view.product;

import java.util.Set;

import javax.validation.constraints.NotEmpty;

import com.nxtlife.efkon.license.entity.product.ProductFamily;

import io.swagger.v3.oas.annotations.media.Schema;


public class ProductFamilyRequest {

	@Schema(description = "name of the product family")
	@NotEmpty(message = "name can't be empty")
	private String name;

	@Schema(description = "code names of product code")
	@NotEmpty(message = "product codes can't be empty")
	private Set<String> productCodes;
	
	public ProductFamily toEntity() {
		ProductFamily productFamily = new ProductFamily();
		productFamily.setName(this.getName());
		return productFamily;
	}


	public String getName() {
		return name;
	}

	public Set<String> getProductCodes() {
		return productCodes;
	}
}
