package com.nxtlife.efkon.license.service.impl;

import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.xssf.streaming.SXSSFWorkbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nxtlife.efkon.license.dao.jpa.LicenseJpaDao;
import com.nxtlife.efkon.license.dao.jpa.ProjectJpaDao;
import com.nxtlife.efkon.license.dao.jpa.ProjectProductJpaDao;
import com.nxtlife.efkon.license.entity.license.License;
import com.nxtlife.efkon.license.entity.user.User;
import com.nxtlife.efkon.license.enums.LicenseStatus;
import com.nxtlife.efkon.license.ex.NotFoundException;
import com.nxtlife.efkon.license.ex.ValidationException;
import com.nxtlife.efkon.license.service.BaseService;
import com.nxtlife.efkon.license.service.LicenseService;
import com.nxtlife.efkon.license.service.ProjectProductService;
import com.nxtlife.efkon.license.service.FileStorageService;
import com.nxtlife.efkon.license.util.AuthorityUtils;
import com.nxtlife.efkon.license.util.WorkBookUtil;
import com.nxtlife.efkon.license.view.license.LicenseRequest;
import com.nxtlife.efkon.license.view.license.LicenseResponse;
import com.nxtlife.efkon.license.view.project.ProjectResponse;
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

	@Value("${file.upload-excel-dir}")
	private String excelDirectory;

	private static Logger logger = LoggerFactory.getLogger(LicenseServiceImpl.class);

	private void createExcel(List<LicenseResponse> licenseResponseList, String fileName, String heading) {
		SXSSFWorkbook workbook = new SXSSFWorkbook();
		try {
			Sheet sheet = workbook.createSheet(heading);
			List<String> columnHeaders = LicenseResponse.licenseColumnHeaders();
			CellStyle headerStyle = WorkBookUtil.getHeaderCellStyle(workbook);
			WorkBookUtil.createRow(headerStyle, sheet, columnHeaders, 0);
			Integer row = 1;

			for (LicenseResponse iterate : licenseResponseList) {
				WorkBookUtil.createRow(sheet, iterate.columnValues(), row++);
			}
			FileOutputStream fout = new FileOutputStream(fileName);
			workbook.write(fout);
			workbook.close();
			workbook.dispose();
			fout.close();

		} catch (IOException e) {
			e.printStackTrace();
		}

	}

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

	// @Override
	// @Secured(AuthorityUtils.LICENSE_UPDATE)
	// public LicenseResponse update(Long id, LicenseRequest request) {
	// Long unmaskId = unmask(id);
	// LicenseResponse license =
	// licenseDao.findResponseByIdAndActiveTrue(unmaskId);
	// if (license == null) {
	// throw new NotFoundException(String.format("License (%s) not found", id));
	// }
	// return null;
	// }

	@Override
	@Secured(AuthorityUtils.LICENSE_FETCH)
	public List<LicenseResponse> findAll() {
		List<LicenseResponse> responseList = licenseDao.findAllByActive(true);
		if (responseList.isEmpty() || responseList == null) {
			throw new NotFoundException("no license found");
		}
		return responseList;
	}

	@Override
	@Secured(AuthorityUtils.LICENSE_FETCH)
	public Resource findAllExcel() {
		List<LicenseResponse> licenseResponseList = findAll();
		String fileName = excelDirectory + "AllLicenses.xlsx";
		createExcel(licenseResponseList, fileName, "licenses");
		return FileStorageService.fetchFile(fileName);
	}

	@Override
	@Secured(AuthorityUtils.LICENSE_UPDATE)
	public LicenseResponse generateKey(Long id, LicenseRequest request) {
		Long unmaskId = unmask(id);
		LicenseResponse license = licenseDao.findByIdAndActiveTrue(unmaskId);
		if (license == null)
			throw new NotFoundException(String.format("license having id [%s] doesn't exist", id));
		if (license.getGeneratedKey() != null) {
			throw new ValidationException(
					String.format("license key is already generated for license having id [%s]", id));
		}
		license.setAccessId(request.getAccessId());
		license.setGeneratedKey(request.getAccessId().concat(license.getCode()) + UUID.randomUUID().toString());
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

	/**
	 * this method used to validate project id and productDetailId
	 * 
	 * @param projectId
	 * @param productDetailIdproductId
	 */
	private void validate(Long projectId, Long productDetailId) {
		if (projectId == null || productDetailId == null) {
			throw new ValidationException("projectId or productId can't be null");
		}
		Long unmaskProjectId = unmask(projectId);
		Long unmaskProductId = unmask(productDetailId);
		if (!projectDao.existsByIdAndActive(unmaskProjectId, true)) {
			throw new NotFoundException(String.format("No project is found having id [%s] ", projectId));
		}
		if (!projectProductDao.existsByProjectIdAndProductDetailIdAndActiveTrue(unmaskProjectId, unmaskProductId)) {
			throw new NotFoundException(String.format("No product is found having id [%s] in project having id [%s]",
					productDetailId, projectId));
		}
	}

	@Override
	@Secured(AuthorityUtils.LICENSE_FETCH)
	public List<LicenseResponse> findByProjectIdandProductId(Long projectId, Long productDetailId) {
		validate(projectId, productDetailId);
		List<ProjectProductResponse> projectProductResponseList = projectProductDao
				.findByProjectIdAndProductDetailIdAndActiveTrue(unmask(projectId), unmask(productDetailId));
		List<LicenseResponse> responseList = new ArrayList<LicenseResponse>();
		for (ProjectProductResponse iterate : projectProductResponseList) {
			responseList.addAll(licenseDao.findByProjectProductIdAndActiveTrue(unmask(iterate.getId())));
		}
		return responseList;
	}

	@Override
	@Secured(AuthorityUtils.LICENSE_FETCH)
	public Resource findLicensesByProjectIdandProductIdExcel(Long projectId, Long productId) {
		List<LicenseResponse> licenseResponseList = findByProjectIdandProductId(projectId, productId);
		String fileName = excelDirectory + "LicensesByProjectIdandProductId.xlsx";
		createExcel(licenseResponseList, fileName, "licenses");
		return FileStorageService.fetchFile(fileName);
	}

	@Override
	@Secured(AuthorityUtils.LICENSE_UPDATE)
	public LicenseResponse replaceGenerateKey(Long id) {
		Long unmaskId = unmask(id);
		LicenseResponse license = licenseDao.findByIdAndActiveTrue(unmaskId);
		if (license == null) {
			throw new NotFoundException(String.format("License not exist having id [%s]", id));
		}
		if (license.getGeneratedKey() == null) {
			throw new ValidationException(
					"license key is not present, For replacing the license first generate the license key");
		}
		int rows = licenseDao.update(unmaskId, false, LicenseStatus.REPLACED, getUserId(), new Date());
		if (rows > 0) {
			logger.info(" License {} updated successfully", unmaskId);
		}
		License newLicense = licenseDao
				.save(new License(license.getCode(), license.getAccessId(), license.getGeneratedKey(),
						license.getName(), LicenseStatus.ACTIVE, unmask(license.getProjectProductId())));
		LicenseResponse response = licenseDao.findResponseByIdAndActiveTrue(newLicense.getId());
		response.setProjectProduct(projectProductService.findById(response.getProjectProductId()));
		return response;
	}

	@Override
	@Secured(AuthorityUtils.LICENSE_FETCH)
	public List<LicenseResponse> findByProjectId(Long projectId) {
		User user = getUser();
		Long unmaskProjectId = unmask(projectId);
		Set<String> roles = user.getRoles().stream().map(role -> role.getName()).collect(Collectors.toSet());

		ProjectResponse projectResponse = projectDao.findByIdAndActive(unmaskProjectId, true);
		if (projectResponse == null) {
			throw new NotFoundException(String.format("project didn't exist having id [%s]", projectId));
		}

		List<LicenseResponse> responseList = null;
		if (roles.contains("Customer")) {
			responseList = licenseDao.findByProjectProductProjectIdAndProjectProductProjectCustomerEmailAndActive(
					unmaskProjectId, user.getEmail(), true);

		} else {
			Boolean isProjectManager = false;
			if (roles.contains("Project Manager")) {
				isProjectManager = true;
				roles.remove("Project Manager");
			}
			if (roles.isEmpty() && isProjectManager) {
				responseList = licenseDao
						.findByProjectProductProjectIdAndProjectProductProjectProjectManagerIdAndActive(unmaskProjectId,
								user.getUserId(), true);
			} else {
				responseList = licenseDao.findByProjectProductProjectIdAndActive(unmaskProjectId, true);
			}
		}

		if (responseList.isEmpty() || responseList == null) {
			throw new NotFoundException(
					String.format("No license is generated for the project having id [%s]", projectId));
		}
		for (LicenseResponse iterate : responseList) {
			iterate.setProjectProduct(projectProductDao.findByIdAndActive(unmask(iterate.getProjectProductId()), true));
		}

		return responseList;
	}

	@Override
	@Secured(AuthorityUtils.LICENSE_FETCH)
	public Resource findLicensesByProjectIdExcel(Long projectId) {

		List<LicenseResponse> licenseResponseList = findByProjectId(projectId);
		String fileName = excelDirectory + "LicensesByProjectId.xlsx";
		createExcel(licenseResponseList, fileName, "licenses");
		return FileStorageService.fetchFile(fileName);
	}

}
