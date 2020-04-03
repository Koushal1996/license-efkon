package com.nxtlife.efkon.license.service;

import java.util.List;

import com.nxtlife.efkon.license.view.product.ProductDetailRequest;
import com.nxtlife.efkon.license.view.product.ProductDetailResponse;

public interface ProductDetailService {

	public List<ProductDetailResponse> getProductDetail();

	public ProductDetailResponse saveProductDetail(ProductDetailRequest detailRequest);
}
