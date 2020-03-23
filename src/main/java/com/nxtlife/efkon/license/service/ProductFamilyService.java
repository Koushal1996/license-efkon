package com.nxtlife.efkon.license.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nxtlife.efkon.license.dao.ProductFamilyDao;
import com.nxtlife.efkon.license.entity.ProductCode;
import com.nxtlife.efkon.license.entity.ProductFamily;
import com.nxtlife.efkon.license.view.ProductFamilyRequest;
import com.nxtlife.efkon.license.view.ProductFamilyResponse;

@Service
public class ProductFamilyService {

	@Autowired
	public ProductFamilyDao productFamilyDao;

	public ProductFamilyResponse saveProductFamily(ProductFamilyRequest productFamilyRequest) {
		
		ProductFamily productFamily = productFamilyRequest.toEntity();
		
		for(ProductCode pc: productFamilyRequest.getProductCodes()) {
			pc.setProductFamily(productFamily);
		}

		return new ProductFamilyResponse(productFamilyDao.save(productFamily));

	}

	public List<ProductFamilyResponse> getAllProductFamily() {
		
		ArrayList<ProductFamilyResponse> familyResponseList=new ArrayList<ProductFamilyResponse>();
		productFamilyDao.findAll().forEach(family -> familyResponseList.add(new ProductFamilyResponse(family)));
		return familyResponseList;

	}

}
