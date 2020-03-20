package com.nxtlife.efkon.license.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.nextlife.license.service.ProductFamilyService;
import com.nextlife.license.view.ProductFamilyRequest;
import com.nxtlife.efkon.license.entity.ProductFamily;

@RestController
public class ProductFamilyController {

	@Autowired
	public ProductFamilyService productFamilyService;

	@PostMapping("family")
	public ProductFamily saveProductFamily(@RequestBody ProductFamilyRequest productFamilyRequest) {
		return productFamilyService.saveProductFamily(productFamilyRequest);
	}

	@GetMapping("family")
	public List<ProductFamily> getAllProductFamily() {
		return productFamilyService.getAllProductFamily();
	}
}
