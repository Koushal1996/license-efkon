package com.nxtlife.efkon.license.service;

import java.util.List;

import com.nxtlife.efkon.license.entity.ProductDetail;
import com.nxtlife.efkon.license.view.ProductDetailRequest;

public interface ProductDetailService {


	/**
	 * this method used to fetch all ProductDetail
	 * 
	 * @return list of <tt>ProductDetail</tt>
	 */
	public List<ProductDetail> getProductDetail();

	public void saveProductDetail(ProductDetailRequest detailRequest);

}
