package com.nxtlife.efkon.license.controller;

import java.util.List;

import com.nxtlife.efkon.license.entity.product.ProductDetail;
import com.nxtlife.efkon.license.view.product.ProductDetailRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.nxtlife.efkon.license.service.ProductDetailService;


@RestController
public class ProductDetailController {

	@Autowired
	public ProductDetailService productDetailService;

	@GetMapping("ProductDetail")
	public List<ProductDetail> getProductDetail() {
		return productDetailService.getProductDetail();
	}

	@PostMapping("ProductDetail")
	public void saveProductDetail(@RequestBody ProductDetailRequest detailRequest) {
		productDetailService.saveProductDetail(detailRequest);
	}

}