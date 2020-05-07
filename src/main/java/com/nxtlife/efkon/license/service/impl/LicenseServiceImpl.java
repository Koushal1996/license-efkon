package com.nxtlife.efkon.license.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nxtlife.efkon.license.dao.jpa.LicenseJpaDao;
import com.nxtlife.efkon.license.dao.jpa.ProjectJpaDao;
import com.nxtlife.efkon.license.dao.jpa.ProjectProductJpaDao;
import com.nxtlife.efkon.license.entity.license.License;
import com.nxtlife.efkon.license.ex.NotFoundException;
import com.nxtlife.efkon.license.ex.ValidationException;
import com.nxtlife.efkon.license.service.BaseService;
import com.nxtlife.efkon.license.service.LicenseService;
import com.nxtlife.efkon.license.service.ProjectProductService;
import com.nxtlife.efkon.license.util.AuthorityUtils;
import com.nxtlife.efkon.license.view.license.LicenseRequest;
import com.nxtlife.efkon.license.view.license.LicenseResponse;
import com.nxtlife.efkon.license.view.project.product.ProjectProductResponse;

@Service("licenseServiceImpl")
@Transactional
public class LicenseServiceImpl extends BaseService implements LicenseService {

	@Autowired
	private ProjectProductService projectProductService;

	@Autowired
	private LicenseJpaDao licenseDao;

	@Autowired
	private ProjectProductJpaDao projectProductDao;

	@Autowired
	private ProjectJpaDao projectDao;

	private static Logger logger = LoggerFactory.getLogger(LicenseServiceImpl.class);

	@Override
	@Secured(AuthorityUtils.LICENSE_FETCH)
	public LicenseResponse findByLicenseId(Long id) {
		Long unmaskId = unmask(id);
		LicenseResponse response = licenseDao.findResponseByIdAndActiveTrue(unmaskId);
		if (response == null) {
			throw new NotFoundException(String.format("License didn't exist having id [%s]", id));
		}
		response.setProjectProduct(projectProductService.findById(response.getProjectProductId()));
		return response;
	}

//	@Override
//	@Secured(AuthorityUtils.LICENSE_UPDATE)
//	public LicenseResponse update(Long id, LicenseRequest request) {
//		Long unmaskId = unmask(id);
//		LicenseResponse license = licenseDao.findResponseByIdAndActiveTrue(unmaskId);
//		if (license == null) {
//			throw new NotFoundException(String.format("License (%s) not found", id));
//		}
//		return null;
//	}

	@Override
	@Secured(AuthorityUtils.LICENSE_FETCH)
	public List<LicenseResponse> findAll() {

		List<License> licenseList = licenseDao.findAllByActiveTrue();

		if (licenseList == null) {
			throw new NotFoundException("no license found");
		}

		return licenseList.stream().map(LicenseResponse::new).collect(Collectors.toList());
	}

	@Override
	@Secured(AuthorityUtils.LICENSE_UPDATE)
	public LicenseResponse generateKey(Long id, LicenseRequest request) {
		Long unmaskId = unmask(id);

		License license = licenseDao.findByIdAndActiveTrue(unmaskId);
		if (license == null)
			throw new NotFoundException(String.format("license having id [%s] doesn't exist", id));

		if (license.getGeneratedKey() != null) {
			throw new ValidationException(
					String.format("license key is already generated for license having id [%s]", id));
		}

		if (request.getAccessId() == null) {
			throw new ValidationException("accessId can't be null for generating license key");
		} else {
			license.setAccessId(request.getAccessId());
			license.setGeneratedKey(request.getAccessId().concat(license.getCode()));
		}

		if (request.getName() != null) {
			license.setName(request.getName());
		}

		int rows = licenseDao.update(unmaskId, license.getGeneratedKey(), license.getName(), getUserId(), new Date());

		if (rows > 0) {
			logger.info(" License {} updated successfully", unmaskId);
		}

		LicenseResponse response = licenseDao.findResponseByIdAndActiveTrue(unmaskId);
		response.setProjectProduct(projectProductDao.findResponseById(unmask(response.getProjectProductId())));

		return response;
	}

	private void validate(Long projectId, Long productDetailIdproductId) {

		if (projectId == null || productDetailIdproductId == null) {
			throw new ValidationException("projectId or productId can't be null");
		}

		Long unmaskProjectId = unmask(projectId);
		Long unmaskProductId = unmask(productDetailIdproductId);

		if (!projectDao.existsByIdAndActive(unmaskProjectId, true)) {
			throw new NotFoundException(String.format("No project is found having id [%s] ", projectId));
		}

		if (!projectProductDao.existsByProjectIdAndProductDetailIdAndActiveTrue(unmaskProjectId, unmaskProductId)) {
			throw new NotFoundException(String.format("no product is found having id [%s] in project having id [%s]",
					productDetailIdproductId, projectId));

		}
	}

	@Override
	@Secured(AuthorityUtils.LICENSE_FETCH)
	public List<LicenseResponse> findByProjectIdandProductId(Long projectId, Long productDetailId) {

		validate(projectId, productDetailId);

		List<ProjectProductResponse> projectProductResponseList = projectProductDao
				.findAllResponseByProjectIdAndProductDetailIdAndActiveTrue(unmask(projectId), unmask(productDetailId));

		List<LicenseResponse> responseList = new ArrayList<LicenseResponse>();
		for (ProjectProductResponse iterate : projectProductResponseList) {
			responseList.addAll(licenseDao
					.findAllResponseByProjectProductIdAndGeneratedKeyIsNotNullAndActiveTrue(unmask(iterate.getId())));

		}

		if (responseList == null || responseList.isEmpty())
			throw new NotFoundException(
					String.format("no license key is generated for project having id [%s] and product having id [%s]",
							projectId, productDetailId));

		return responseList;
	}

	@Override
	@Secured(AuthorityUtils.LICENSE_UPDATE)
	public LicenseResponse replaceGenerateKey(Long id) {
		Long unmaskId = unmask(id);
		License license = licenseDao.findByIdAndActiveTrue(unmaskId);

		if (license == null) {
			throw new NotFoundException(String.format("License not exist having id [%s]", id));
		}

		if (license.getGeneratedKey() == null) {
			throw new ValidationException(
					"license key is not present, For replacing the license first generate the license key");
		}

		int rows = licenseDao.update(unmaskId, false, getUserId(), new Date());

		if (rows > 0) {
			logger.info(" License {} updated successfully", unmaskId);
		}

		license = licenseDao.save(new License(license.getCode(), license.getAccessId(), license.getGeneratedKey(),
				license.getName(), license.getStatus(), license.getProjectProduct()));

		LicenseResponse response = licenseDao.findResponseByIdAndActiveTrue(license.getId());
		response.setProjectProduct(projectProductService.findById(response.getProjectProductId()));

		return response;
	}

}
