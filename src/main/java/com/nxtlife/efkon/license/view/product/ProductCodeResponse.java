package com.nxtlife.efkon.license.view.product;


import com.nxtlife.efkon.license.entity.product.ProductCode;

public class ProductCodeResponse {

	private Long id;

	private String name;

	public ProductCodeResponse(Long id, String name) {
		super();
		this.id = id;
		this.name = name;
	}

	public ProductCodeResponse(ProductCode productCode) {
		this.id = productCode.getId();
		this.name = productCode.getName();
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

}
