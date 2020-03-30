package com.nxtlife.efkon.license.service.impl;

import java.util.List;

import com.nxtlife.efkon.license.dao.jpa.ProductDetailJpaDao;
import com.nxtlife.efkon.license.entity.product.ProductDetail;
import com.nxtlife.efkon.license.service.ProductDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.nxtlife.efkon.license.view.product.ProductDetailRequest;

@Service
public class ProductDetailServiceImpl implements ProductDetailService {

	@Autowired
	public ProductDetailJpaDao productDetailJpaDao;

	public List<ProductDetail> getProductDetail() {
		return productDetailJpaDao.findAll();
	}

	public void saveProductDetail(ProductDetailRequest detailRequest) {
		ProductDetail detail = detailRequest.toEntity();
		productDetailJpaDao.save(detail);
	}

}
