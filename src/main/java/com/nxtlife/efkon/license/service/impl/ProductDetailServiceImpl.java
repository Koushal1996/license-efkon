package com.nxtlife.efkon.license.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nxtlife.efkon.license.dao.ProductDetailDao;
import com.nxtlife.efkon.license.entity.ProductDetail;
import com.nxtlife.efkon.license.service.ProductDetailService;
import com.nxtlife.efkon.license.view.ProductDetailRequest;

@Service("productDetailServiceImpl")
@Transactional
public class ProductDetailServiceImpl implements ProductDetailService {

	@Autowired
	public ProductDetailDao productDetailDao;

	/**
	 * return a list of ProductDetail. call findAll() method of jpa which return
	 * list of objects
	 *
	 *
	 * @return List of <tt>ProductDetail</tt>
	 */
	@Override
	public List<ProductDetail> getProductDetail() {
		return productDetailDao.findAll();
	}

	/**
	 * save the detailRequest
	 *
	 * @Param detailRequest call save method of jpa
	 * @return <tt>null</tt>
	 */
	@Override
	public void saveProductDetail(ProductDetailRequest detailRequest) {
		ProductDetail detail = detailRequest.toEntity();
		productDetailDao.save(detail);
	}

}
