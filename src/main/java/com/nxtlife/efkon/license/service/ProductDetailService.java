package com.nxtlife.efkon.license.service;

import com.nxtlife.efkon.license.entity.product.ProductDetail;
import com.nxtlife.efkon.license.view.product.ProductDetailRequest;

import java.util.List;

public interface ProductDetailService {

    public List<ProductDetail> getProductDetail();

    public void saveProductDetail(ProductDetailRequest detailRequest);
}
