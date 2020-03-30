package com.nxtlife.efkon.license.service.impl;

import java.util.ArrayList;
import java.util.List;

import com.nxtlife.efkon.license.dao.jpa.ProductFamilyJpaDao;
import com.nxtlife.efkon.license.entity.product.ProductCode;
import com.nxtlife.efkon.license.entity.product.ProductFamily;
import com.nxtlife.efkon.license.service.ProductFamilyService;
import com.nxtlife.efkon.license.view.product.ProductFamilyRequest;
import com.nxtlife.efkon.license.view.product.ProductFamilyResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;




import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ProductFamilyServiceImpl implements ProductFamilyService {

	@Autowired
	public ProductFamilyJpaDao productFamilyJpaDao;

	public ProductFamilyResponse save(ProductFamilyRequest productFamilyRequest) {
		
		ProductFamily productFamily=productFamilyRequest.toEntity();
		
		for(ProductCode pc: productFamilyRequest.getProductCodes()) {
			pc.setProductFamily(productFamily);
		}

		return new ProductFamilyResponse(productFamilyJpaDao.save(productFamily));

	}

	public List<ProductFamilyResponse> findAll() {
		
		ArrayList<ProductFamilyResponse> familyResponseList=new ArrayList<ProductFamilyResponse>();
		productFamilyJpaDao.findAll().forEach(family -> familyResponseList.add(new ProductFamilyResponse(family)));
		return familyResponseList;

	}

}
