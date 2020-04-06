package com.nxtlife.efkon.license.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nxtlife.efkon.license.dao.jpa.ProductCodeJpaDao;
import com.nxtlife.efkon.license.dao.jpa.ProductDetailJpaDao;
import com.nxtlife.efkon.license.dao.jpa.ProductFamilyJpaDao;
import com.nxtlife.efkon.license.dao.jpa.ProjectProductJpaDao;
import com.nxtlife.efkon.license.dao.jpa.VersionJpaDao;
import com.nxtlife.efkon.license.entity.product.ProductDetail;
import com.nxtlife.efkon.license.ex.NotFoundException;
import com.nxtlife.efkon.license.ex.ValidationException;
import com.nxtlife.efkon.license.service.BaseService;
import com.nxtlife.efkon.license.service.ProductDetailService;
import com.nxtlife.efkon.license.view.SuccessResponse;
import com.nxtlife.efkon.license.view.product.ProductCodeResponse;
import com.nxtlife.efkon.license.view.product.ProductDetailRequest;
import com.nxtlife.efkon.license.view.product.ProductDetailResponse;
import com.nxtlife.efkon.license.view.product.ProductFamilyResponse;
import com.nxtlife.efkon.license.view.version.VersionResponse;

@Service("productDetailServiceImpl")
@Transactional
public class ProductDetailServiceImpl extends BaseService implements ProductDetailService {

	private static Logger logger = LoggerFactory.getLogger(ProductFamilyServiceImpl.class);

	@Autowired
	public ProductDetailJpaDao productDetailDao;

	@Autowired
	public ProductFamilyJpaDao productFamilyDao;

	@Autowired
	public ProductCodeJpaDao productCodeDao;

	@Autowired
	public VersionJpaDao versionDao;

	@Autowired
	ProjectProductJpaDao projectProductDao;

	public void validate(ProductDetailRequest request) {
		if (!productFamilyDao.existsByIdAndActive(request.getProductFamilyId(), true)) {
			throw new ValidationException(
					String.format("Product family (%s) not exist", mask(request.getProductFamilyId())));
		}
		if (!productCodeDao.existsByIdAndProductFamilyIdAndActive(request.getProductCodeId(),
				request.getProductFamilyId(), true)) {
			throw new ValidationException(String.format("This Product code (%s) not exist for product family (%s)",
					mask(request.getProductCodeId()), mask(request.getProductFamilyId())));
		}
		if (!versionDao.existsByIdAndActive(request.getVersionId(), true)) {
			throw new ValidationException(String.format("Version (%s) not exist", mask(request.getVersionId())));
		}
		if (productDetailDao.existsByProductFamilyIdAndProductCodeIdAndVersionIdAndActive(request.getProductFamilyId(),
				request.getProductCodeId(), request.getVersionId(), true)) {
			throw new ValidationException(
					String.format("This product family (%s), product code (%s) and Version (%s) already exist",
							mask(request.getProductFamilyId()), mask(request.getProductCodeId()),
							mask(request.getVersionId())));
		}
	}

	public List<ProductDetailResponse> getProductDetail() {
		List<ProductDetailResponse> productDetailResponseList = new ArrayList<>();
		List<ProductDetail> productDetails = productDetailDao.findAllByActive(true);
		productDetails.forEach(detail -> {
			ProductDetailResponse response = new ProductDetailResponse(detail.getId());
			response.setProductFamily(ProductFamilyResponse.get(detail.getProductFamily()));
			response.setProductCode(ProductCodeResponse.get(detail.getProductCode()));
			response.setVersion(VersionResponse.get(detail.getVersion()));
			productDetailResponseList.add(response);
		});
		return productDetailResponseList;
	}

	public ProductDetailResponse save(ProductDetailRequest request) {
		validate(request);
		ProductDetail productDetail = productDetailDao.save(
				new ProductDetail(request.getProductCodeId(), request.getProductFamilyId(), request.getVersionId()));
		ProductDetailResponse response = ProductDetailResponse.get(productDetail);
		response.setProductFamily(productFamilyDao.findResponseById(request.getProductFamilyId()));
		response.setProductCode(productCodeDao.findResponseById(request.getProductCodeId()));
		response.setVersion(versionDao.findResponseById(request.getVersionId()));
		return response;
	}

	public ProductDetailResponse update(Long id, ProductDetailRequest request) {

		Long unmaskId = unmask(id);
		if (!productDetailDao.existByIdAndActive(unmaskId,true)) {
			throw new NotFoundException(String.format("Product Detail (%s) not found", id));
		}
		validate(request);
		ProductDetail productDetail = productDetailDao.findById(unmaskId).get();
		int rows;
		if (!request.getProductFamilyId().equals(productDetail.getProductFamily().getId())) {
			rows = productDetailDao.updateProductDetailById(request.getProductFamilyId(), request.getProductCodeId(),
					request.getVersionId(), unmaskId, getUserId(), new Date());
		} else if (!request.getProductCodeId().equals(productDetail.getProductCode().getId())) {
			rows = productDetailDao.updateProductCodeIdAndVersionIdById(request.getProductCodeId(),
					request.getVersionId(), unmaskId, getUserId(), new Date());
		} else {
			rows = productDetailDao.updateVersionIdById(request.getVersionId(), unmaskId, getUserId(), new Date());
		}

		if (rows > 0) {
			logger.info("Product detail {} updated successfully", unmaskId);
		}

		ProductDetailResponse detailResponse = productDetailDao.findResponseById(unmaskId);
		return detailResponse;
	}

	public SuccessResponse delete(Long id) {

		Long unmaskId = unmask(id);
		if (!productDetailDao.existByIdAndActive(unmaskId,true)) {
			throw new NotFoundException(String.format("Product Detail (%s) not found", id));
		}

		if (projectProductDao.existsByProductDetailIdAndActive(unmaskId, true)) {
			throw new ValidationException(String.format(
					"Product detail(%s) can't be delete as some of the version are related to this product detail ",
					unmaskId));
		}
		int rows = productDetailDao.delete(unmaskId, getUserId(), new Date());
		if (rows > 0) {
			logger.info("Product detail {} successfuly deleted", unmaskId);
		}
		return new SuccessResponse(HttpStatus.OK.value(), "Product detail deleted successfully");
	}

}
