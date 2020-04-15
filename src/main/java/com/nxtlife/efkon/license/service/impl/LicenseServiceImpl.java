package com.nxtlife.efkon.license.service.impl;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nxtlife.efkon.license.dao.jpa.LicenseJpaDao;
import com.nxtlife.efkon.license.dao.jpa.ProductDetailJpaDao;
import com.nxtlife.efkon.license.dao.jpa.ProjectJpaDao;
import com.nxtlife.efkon.license.dao.jpa.ProjectProductJpaDao;
import com.nxtlife.efkon.license.entity.license.License;
import com.nxtlife.efkon.license.entity.product.ProductDetail;
import com.nxtlife.efkon.license.entity.project.product.ProjectProduct;
import com.nxtlife.efkon.license.enums.LicenseStatus;
import com.nxtlife.efkon.license.enums.LicenseType;
import com.nxtlife.efkon.license.ex.ValidationException;
import com.nxtlife.efkon.license.service.BaseService;
import com.nxtlife.efkon.license.service.LicenseService;
import com.nxtlife.efkon.license.view.license.LicenseRequest;
import com.nxtlife.efkon.license.view.license.LicenseResponse;
import com.nxtlife.efkon.license.view.product.ProductCodeResponse;
import com.nxtlife.efkon.license.view.product.ProductDetailResponse;
import com.nxtlife.efkon.license.view.product.ProductFamilyResponse;
import com.nxtlife.efkon.license.view.project.ProjectResponse;
import com.nxtlife.efkon.license.view.project.product.ProjectProductResponse;
import com.nxtlife.efkon.license.view.version.VersionResponse;

@Service("licenseServiceImpl")
@Transactional
public class LicenseServiceImpl extends BaseService implements LicenseService {

	@Autowired
	private ProjectProductJpaDao projectProductDao;

	@Autowired
	private ProductDetailJpaDao productDetailDao;

	@Autowired
	private LicenseJpaDao licenseDao;

	@Autowired
	private ProjectJpaDao projectDao;

	public void validate(LicenseRequest request) {
		if (!projectProductDao.existsByIdAndActive(request.getProjectProductId(), true)) {
			throw new ValidationException(
					String.format("Project product (%s) not exist", mask(request.getProjectProductId())));
		}

	}

	public String setEndDate(String startDate, Integer expirationMonthCount) {

		int endMonth, endYear;
		LocalDate start = LocalDate.parse(startDate, DateTimeFormatter.ofPattern("yyyy-MM-dd"));
		endMonth = start.getMonthValue() + expirationMonthCount;
		endYear = endMonth > 12 ? start.getYear() + 1 : start.getYear();
		endMonth = endMonth > 12 ? endMonth - 12 : endMonth;
		String endDate = LocalDate.of(endYear, endMonth, start.getDayOfMonth()).toString();
		return endDate;

	}

	public String getLicenseCode(LicenseRequest request) {
		String uid = Long.toString(request.getUniqueAccessId());
		String delimiter = "-";
		String code = uid + delimiter + "EF"; // short code of EFKON
		ProjectProduct projectProduct = projectProductDao.findByIdAndActive(request.getProjectProductId(), true);
		code = code + String.format("-%04d", projectProduct.getProject().getId());
		code = code + delimiter + "EE"; // short code of product family
		ProductDetail productDetail = productDetailDao.findByIdAndActive(projectProduct.getProductDetail().getId(),
				true);
		code = code + String.format("-%02d", productDetail.getProductCode().getId());
		code = code + String.format("-%04d", projectProduct.getLicenseCount());
		if (projectProduct.getLicenseType().name().equals(LicenseType.COMMERCIAL.name())) {
			code = code + delimiter + "CL";
			code = code + String.format("-%04d", projectProduct.getExpirationMonthCount());
		} else {
			code = code + delimiter + "DM";
			code = code + String.format("-%04d", 1);
		}
		LocalDate startDate = LocalDate.parse(projectProduct.getStartDate(), DateTimeFormatter.ofPattern("yyyy-MM-dd"));
		String startDateAsString = startDate.format(DateTimeFormatter.ofPattern("-ddMMyyyy"));
		LocalDate endDate = LocalDate.parse(
				setEndDate(projectProduct.getStartDate(), projectProduct.getExpirationMonthCount()),
				DateTimeFormatter.ofPattern("yyyy-MM-dd"));
		String endDateAsString = endDate.format(DateTimeFormatter.ofPattern("-ddMMyyyy"));
		code = code + startDateAsString + endDateAsString;
		return code;
	}

	public LicenseResponse getLicenseResponse(License license, Long projectProductId) {
		LicenseResponse response = LicenseResponse.get(license);
		ProjectProduct projectProduct = projectProductDao.findByIdAndActive(projectProductId, true);
		ProjectProductResponse projectProductResponse = ProjectProductResponse.get(projectProduct);
		ProductDetail productDetail = productDetailDao.findById(projectProduct.getProductDetail().getId()).get();
		ProductDetailResponse productDetailResponse = ProductDetailResponse.get(productDetail);
		productDetailResponse.setProductFamily(ProductFamilyResponse.get(productDetail.getProductFamily()));
		productDetailResponse.setProductCode(ProductCodeResponse.get(productDetail.getProductCode()));
		productDetailResponse.setVersion(VersionResponse.get(productDetail.getVersion()));
		projectProductResponse.setProductDetailResponse(productDetailResponse);
		projectProductResponse.setProjectResponse(
				ProjectResponse.get(projectDao.findById(projectProduct.getProject().getId()).get()));
		response.setProjectProduct(projectProductResponse);
		return response;

	}

	public Long generateLicenseKey() {
		return 11111111111111111L; // temporary key
	}

	@Override
	public LicenseResponse save(LicenseRequest request) {
		validate(request);
		String licenseCode = getLicenseCode(request);
		if (licenseDao.existsByProjectProductIdAndCodeAndAccessIdAndActive(request.getProjectProductId(),
				getLicenseCode(request), request.getUniqueAccessId(), true)) {
			throw new ValidationException(String.format(
					"This license detail already assigned with project product (%s) and with Unique access Id (%s)",
					mask(request.getProjectProductId()), mask(request.getUniqueAccessId())));
		}
		License license = request.toEntity();
		license.setStatus(LicenseStatus.ACTIVE);
		license.setCode(licenseCode);
		license.settProjectProductId(request.getProjectProductId());
		license.setGeneratedKey(generateLicenseKey());
		licenseDao.save(license);
		return getLicenseResponse(license, license.gettProjectProductId());
	}

	@Override
	public List<LicenseResponse> findAll() {

		List<LicenseResponse> responses = new ArrayList<LicenseResponse>();
		licenseDao.findByActive(true)
				.forEach(license -> responses.add(getLicenseResponse(license, license.getProjectProduct().getId())));
		return responses;
	}

	@Override
	public LicenseResponse update(Long id, LicenseRequest request) {
		return null;
	}

}
