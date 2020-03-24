package com.nxtlife.efkon.license.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nxtlife.efkon.license.dao.ProductDetailDao;
import com.nxtlife.efkon.license.entity.ProductDetail;
import com.nxtlife.efkon.license.view.ProductDetailRequest;

@Service
public class ProductDetailService {

	@Autowired
	public ProductDetailDao productDetailDao;

	public List<ProductDetail> getProductDetail() {
		return productDetailDao.findAll();
	}

	public void saveProductDetail(ProductDetailRequest detailRequest) {
		ProductDetail detail = detailRequest.toEntity();
		productDetailDao.save(detail);
	}

}
