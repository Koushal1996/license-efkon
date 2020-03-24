package com.nxtlife.efkon.license.view;

import com.nxtlife.efkon.license.entity.ProductCode;
import com.nxtlife.efkon.license.entity.ProductDetail;
import com.nxtlife.efkon.license.entity.ProductFamily;
import com.nxtlife.efkon.license.entity.Version;

public class ProductDetailRequest {

	private ProductFamily productFamily;

	private Version version;

	public ProductDetailRequest() {
		super();
	}

	public ProductDetail toEntity() {
		ProductDetail detail = new ProductDetail();
		detail.setProductFamily(this.getProductFamily());
		for (ProductCode code : this.getProductFamily().getProductCodes()) {
			detail.setProductCode(code);
			code.setProductFamily(this.getProductFamily());
		}
		detail.setVersion(this.getVersion());
		return detail;
	}

	public ProductDetailRequest(ProductFamily productFamily, Version version) {
		super();
		this.productFamily = productFamily;
		this.version = version;
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

}
