package com.nextlife.license.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nxtlife.efkon.license.entity.ProductDetail;
import com.nxtlife.efkon.license.repository.ProductDetailRepo;

@Service
public class ProductDetailService {
	
	@Autowired
	public ProductDetailRepo productDetailRepo;
	
	public List<ProductDetail> getProductDetail(){
		return productDetailRepo.findAll();
	}
	
	public ProductDetail saveProductDetail(ProductDetail productDetail){
		return productDetailRepo.save(productDetail);
	}
	
	

}
