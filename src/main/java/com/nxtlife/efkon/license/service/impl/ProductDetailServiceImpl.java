package com.nxtlife.efkon.license.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nxtlife.efkon.license.dao.jpa.ProductDetailJpaDao;
import com.nxtlife.efkon.license.entity.product.ProductDetail;
import com.nxtlife.efkon.license.service.BaseService;
import com.nxtlife.efkon.license.service.ProductDetailService;
import com.nxtlife.efkon.license.view.product.ProductDetailRequest;
import com.nxtlife.efkon.license.view.product.ProductDetailResponse;

@Service
public class ProductDetailServiceImpl extends BaseService implements ProductDetailService {

	@Autowired
	public ProductDetailJpaDao productDetailDao;

	public List<ProductDetailResponse> getProductDetail() {
		List<ProductDetailResponse> detailResponses = productDetailDao.findByActive(true);
		return detailResponses;
	}

	public ProductDetailResponse saveProductDetail(ProductDetailRequest detailRequest) {
		ProductDetail detail = detailRequest.toEntity();
		productDetailDao.save(detail);
		ProductDetailResponse response = productDetailDao.findResponseById(detail.getId());
		return response;
	}

}
