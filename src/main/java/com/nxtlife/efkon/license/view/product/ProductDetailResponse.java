package com.nxtlife.efkon.license.view.product;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.nxtlife.efkon.license.entity.product.ProductDetail;
import com.nxtlife.efkon.license.view.Response;
import com.nxtlife.efkon.license.view.version.VersionResponse;

import io.swagger.v3.oas.annotations.media.Schema;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
public class ProductDetailResponse implements Response {

	@Schema(description = "Id of the product detail")
	private Long id;

	@Schema(description = "product family of product detail")
	private ProductFamilyResponse productFamily;

	@Schema(description = "product code of product detail")
	private ProductCodeResponse productCode;

	@Schema(description = "version of product detail")
	private VersionResponse version;

	public ProductDetailResponse() {
		super();
	}

	public ProductDetailResponse(Long id, ProductFamilyResponse productFamily, ProductCodeResponse productCode,
			VersionResponse version) {
		super();
		this.id = id;
		this.productFamily = productFamily;
		this.productCode = productCode;
		this.version = version;
	}

	public Long getId() {
		return mask(id);
	}

	public void setId(Long id) {
		this.id = id;
	}

	public ProductFamilyResponse getProductFamily() {
		return productFamily;
	}

	public void setProductFamily(ProductFamilyResponse productFamily) {
		this.productFamily = productFamily;
	}

	public ProductCodeResponse getProductCode() {
		return productCode;
	}

	public void setProductCode(ProductCodeResponse productCode) {
		this.productCode = productCode;
	}

	public VersionResponse getVersion() {
		return version;
	}

	public void setVersion(VersionResponse version) {
		this.version = version;
	}

	public static ProductDetailResponse get(ProductDetail productDetail) {
		if (productDetail != null) {
			ProductDetailResponse response = new ProductDetailResponse();
			response.setId(productDetail.getId());
			response.setProductFamily(ProductFamilyResponse.get(productDetail.getProductFamily()));
			response.setProductCode(ProductCodeResponse.get(productDetail.getProductCode()));
			response.setVersion(VersionResponse.get(productDetail.getVersion()));
			return response;
		}
		return null;

	}

}
