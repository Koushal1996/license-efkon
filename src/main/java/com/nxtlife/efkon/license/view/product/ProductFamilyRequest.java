package com.nxtlife.efkon.license.view.product;

import java.util.Set;

import javax.validation.Valid;
import javax.validation.constraints.NotEmpty;

import com.nxtlife.efkon.license.entity.product.ProductFamily;
import com.nxtlife.efkon.license.view.Request;

import io.swagger.v3.oas.annotations.media.Schema;

public class ProductFamilyRequest implements Request {

	@Schema(description = "Id of the product family")
	private Long id;

	@Schema(description = "name of the product family")
	@NotEmpty(message = "name can't be empty")
	private String name;

	@Schema(description = "codes of product code")
	@NotEmpty(message = "product codes can't be empty")
	@Valid
	private Set<ProductCodeRequest> productCodes;

	public ProductFamily toEntity() {
		ProductFamily productFamily = new ProductFamily();
		productFamily.setName(name);
		productFamily.setId(this.getId());
		return productFamily;
	}

	public String getName() {
		return name;
	}

	public Set<ProductCodeRequest> getProductCodes() {
		return productCodes;
	}

	public Long getId() {
		return unmask(id);
	}

	public void setId(Long id) {
		this.id = id;
	}

}
