package com.nxtlife.efkon.license.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.nxtlife.efkon.license.service.ProductFamilyService;
import com.nxtlife.efkon.license.view.product.ProductFamilyRequest;
import com.nxtlife.efkon.license.view.product.ProductFamilyResponse;

import javax.validation.Valid;

@RestController
public class ProductFamilyController {

	@Autowired
	public ProductFamilyService productFamilyService;

	@PostMapping("family")
	public ProductFamilyResponse saveProductFamily(@Valid @RequestBody ProductFamilyRequest productFamilyRequest) {
		return productFamilyService.save(productFamilyRequest);
	}

	@GetMapping("family")
	public List<ProductFamilyResponse> getAllProductFamily() {
		return productFamilyService.findAll();
	}
}
