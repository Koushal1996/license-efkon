package com.nxtlife.efkon.license.view.product;

import com.nxtlife.efkon.license.entity.product.ProductDetail;
import com.nxtlife.efkon.license.view.version.VersionRequest;

public class ProductDetailRequest {

	private ProductFamilyRequest productFamily;

	private VersionRequest version;

	public ProductDetailRequest() {
		super();
	}

	public ProductDetail toEntity() {
		ProductDetail detail = new ProductDetail();
		detail.setProductFamily(this.getProductFamily().toEntity());
		for (ProductCodeRequest code : this.getProductFamily().getProductCodes()) {
			detail.setProductCode(code.toEntity());
		}
		detail.setVersion(this.getVersion().toEntity());
		return detail;
	}

	public ProductDetailRequest(ProductFamilyRequest productFamily, VersionRequest version) {
		super();
		this.productFamily = productFamily;
		this.version = version;
	}

	public ProductFamilyRequest getProductFamily() {
		return productFamily;
	}

	public void setProductFamily(ProductFamilyRequest productFamily) {
		this.productFamily = productFamily;
	}

	public VersionRequest getVersion() {
		return version;
	}

	public void setVersion(VersionRequest version) {
		this.version = version;
	}
}
