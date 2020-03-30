package com.nxtlife.efkon.license.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nxtlife.efkon.license.dao.ProductFamilyDao;
import com.nxtlife.efkon.license.entity.ProductCode;
import com.nxtlife.efkon.license.entity.ProductFamily;
import com.nxtlife.efkon.license.service.ProductFamilyService;
import com.nxtlife.efkon.license.view.ProductFamilyRequest;
import com.nxtlife.efkon.license.view.ProductFamilyResponse;

@Service("productFamilyServiceImpl")
@Transactional
public class ProductFamilyServiceImpl implements ProductFamilyService {

	@Autowired
	public ProductFamilyDao productFamilyDao;

	/**
	 * save the ProductFamily
	 *
	 * @Param productFamilyRequest call save method of jpa
	 * @return <tt>ProductFamilyResponse</tt>
	 */
	@Override
	public ProductFamilyResponse saveProductFamily(ProductFamilyRequest productFamilyRequest) {

		ProductFamily productFamily = productFamilyRequest.toEntity();

		for (ProductCode pc : productFamilyRequest.getProductCodes()) {
			pc.setProductFamily(productFamily);
		}

		return new ProductFamilyResponse(productFamilyDao.save(productFamily));

	}

	/**
	 * return a list of ProductFamily. call findAll() method of jpa which return
	 * list of objects
	 *
	 *
	 * @return List of <tt>ProductFamilyResponse</tt>
	 */
	@Override
	public List<ProductFamilyResponse> getAllProductFamily() {

		ArrayList<ProductFamilyResponse> familyResponseList = new ArrayList<ProductFamilyResponse>();
		productFamilyDao.findAll().forEach(family -> familyResponseList.add(new ProductFamilyResponse(family)));
		return familyResponseList;

	}

}
