package com.nxtlife.efkon.license.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nxtlife.efkon.license.dao.jpa.ProductDetailJpaDao;
import com.nxtlife.efkon.license.entity.product.ProductCode;
import com.nxtlife.efkon.license.entity.product.ProductDetail;
import com.nxtlife.efkon.license.service.BaseService;
import com.nxtlife.efkon.license.service.ProductDetailService;
import com.nxtlife.efkon.license.view.product.ProductDetailRequest;

@Service
public class ProductDetailServiceImpl extends BaseService implements ProductDetailService {

	@Autowired
	public ProductDetailJpaDao productDetailDao;

	public List<ProductDetail> getProductDetail() {
		return productDetailDao.findAll();
	}

	public void saveProductDetail(ProductDetailRequest detailRequest) {

		Long unmaskFamilyId = unmask(detailRequest.getProductFamily().getId());
		detailRequest.getProductFamily().setId(unmaskFamilyId);
		for (ProductCode code : detailRequest.getProductFamily().getProductCodes()) {
			Long unmaskCodeId = unmask(code.getId());
			code.setId(unmaskCodeId);
		}
		Long unmaskVersionId = unmask(detailRequest.getVersion().getId());
		detailRequest.getVersion().setId(unmaskVersionId);
		ProductDetail detail = detailRequest.toEntity();
		productDetailDao.save(detail);
	}

}
