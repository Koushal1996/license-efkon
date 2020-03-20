package com.nextlife.license.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nextlife.license.view.ProductFamilyRequest;
import com.nxtlife.efkon.license.entity.ProductCode;
import com.nxtlife.efkon.license.entity.ProductFamily;
import com.nxtlife.efkon.license.repository.ProductFamilyRepo;

@Service
public class ProductFamilyService {

	@Autowired
	public ProductFamilyRepo productFamilyrepo;

	public ProductFamily saveProductFamily(ProductFamilyRequest productFamilyRequest) {
		
		ProductFamily productFamily = productFamilyRequest.toEntity();
		
		for(ProductCode pc: productFamilyRequest.getProductCodes()) {
			pc.setProductFamily(productFamily);
		}

		return productFamilyrepo.save(productFamily);

	}

	public List<ProductFamily> getAllProductFamily() {

		return productFamilyrepo.findAll();

	}

}
