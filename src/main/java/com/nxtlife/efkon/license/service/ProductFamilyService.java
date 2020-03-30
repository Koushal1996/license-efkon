package com.nxtlife.efkon.license.service;

import java.util.List;

import com.nxtlife.efkon.license.ex.NotFoundException;
import com.nxtlife.efkon.license.view.ProductFamilyRequest;
import com.nxtlife.efkon.license.view.ProductFamilyResponse;

public interface ProductFamilyService {

	/**
	 * this method used to save ProductFamily
	 * 
	 * @param productFamilyRequest
	 * @return <tt>ProductFamilyResponse</tt>
	 * 
	 */
	public ProductFamilyResponse saveProductFamily(ProductFamilyRequest productFamilyRequest);

	/**
	 * this method used to fetch all ProductFamily
	 * 
	 * @return list of <tt>ProductFamilyResponse</tt>
	 */
	public List<ProductFamilyResponse> getAllProductFamily();

}
