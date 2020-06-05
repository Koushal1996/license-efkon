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

import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.PageSize;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;
import com.nxtlife.efkon.license.dao.jpa.LicenseJpaDao;
import com.nxtlife.efkon.license.dao.jpa.ProductDetailJpaDao;
import com.nxtlife.efkon.license.dao.jpa.ProjectJpaDao;
import com.nxtlife.efkon.license.dao.jpa.ProjectProductJpaDao;
import com.nxtlife.efkon.license.entity.license.License;
import com.nxtlife.efkon.license.entity.user.User;
import com.nxtlife.efkon.license.enums.LicenseStatus;
import com.nxtlife.efkon.license.ex.NotFoundException;
import com.nxtlife.efkon.license.ex.ValidationException;
import com.nxtlife.efkon.license.service.BaseService;
import com.nxtlife.efkon.license.service.FileStorageService;
import com.nxtlife.efkon.license.service.LicenseService;
import com.nxtlife.efkon.license.service.ProjectProductService;
import com.nxtlife.efkon.license.util.AuthorityUtils;
import com.nxtlife.efkon.license.util.DateUtil;
import com.nxtlife.efkon.license.util.ITextPdfUtil;
import com.nxtlife.efkon.license.util.PdfHeaderFooterPageEvent;
import com.nxtlife.efkon.license.util.PdfTableUtil;
import com.nxtlife.efkon.license.util.WorkBookUtil;
import com.nxtlife.efkon.license.view.license.LicenseRequest;
import com.nxtlife.efkon.license.view.license.LicenseResponse;
import com.nxtlife.efkon.license.view.product.ProductDetailResponse;
import com.nxtlife.efkon.license.view.project.ProjectResponse;
import com.nxtlife.efkon.license.view.project.product.ProjectProductGraphResponse;

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

	@Autowired
	private ProductDetailJpaDao productDetailDao;

	@Value("${file.upload-pdf-dir}")
	private String pdfDirectory;

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
				List<String> columnValues = iterate.columnValues();
				columnValues
						.add(iterate.getProjectProductResponse().getProductDetailResponse().getProductCodeName() == null
								? "NA"
								: iterate.getProjectProductResponse().getProductDetailResponse().getProductCodeName());
				columnValues.add(
						iterate.getProjectProductResponse().getProductDetailResponse().getProductFamilyName() == null
								? "NA"
								: iterate.getProjectProductResponse().getProductDetailResponse()
										.getProductFamilyName());
				columnValues.add(
						iterate.getProjectProductResponse().getProductDetailResponse().getVersionName() == null ? "NA"
								: iterate.getProjectProductResponse().getProductDetailResponse().getVersionName());
				columnValues.add(iterate.getName() == null ? "NA" : iterate.getName());
				WorkBookUtil.createRow(sheet, columnValues, row++);
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

	private void createPdf(List<LicenseResponse> licenseResponseList, String fileName, String heading) {

		Document document = new Document(PageSize.A4, 10f, 10f, 10f, 30f);
		try {
			FileOutputStream fout = new FileOutputStream(fileName);
			PdfWriter pdfWriter = PdfWriter.getInstance(document, fout);
			List<String> columnHeaders = LicenseResponse.licenseColumnHeaders();
			int length = columnHeaders.size();
			PdfPTable headerPdfTable = new PdfPTable(length);
			headerPdfTable.setTotalWidth(LicenseResponse.columnWidth());
			PdfTableUtil.addTableHeader(headerPdfTable, columnHeaders);
			String generatedDate = DateUtil.get(new Date(), "dd-MM-yyyy HH:mm:ss");
			pdfWriter.setPageEvent(new PdfHeaderFooterPageEvent(heading, headerPdfTable, generatedDate));
			document.open();
			ITextPdfUtil.setDocumentProperties(document);
			PdfPTable pdfTable = new PdfPTable(length);
			pdfTable.setTotalWidth(LicenseResponse.columnWidth());

			for (LicenseResponse iterate : licenseResponseList) {
				List<String> columnValues = iterate.columnValues();
				columnValues
						.add(iterate.getProjectProductResponse().getProductDetailResponse().getProductCodeName() == null
								? "NA"
								: iterate.getProjectProductResponse().getProductDetailResponse().getProductCodeName());
				columnValues.add(
						iterate.getProjectProductResponse().getProductDetailResponse().getProductFamilyName() == null
								? "NA"
								: iterate.getProjectProductResponse().getProductDetailResponse()
										.getProductFamilyName());
				columnValues.add(
						iterate.getProjectProductResponse().getProductDetailResponse().getVersionName() == null ? "NA"
								: iterate.getProjectProductResponse().getProductDetailResponse().getVersionName());
				columnValues.add(iterate.getName() == null ? "NA" : iterate.getName());
				PdfTableUtil.addTableRows(pdfTable, columnValues);
			}
			pdfTable.setWidthPercentage(95f);
			document.add(pdfTable);
			document.close();
			fout.close();
		} catch (DocumentException | IOException e) {
			e.printStackTrace();
		}

	}

	/**
	 * this method used to validate project id and productDetailId
	 * 
	 * @param projectId
	 * @param productDetailIdproductId
	 */
	private void validate(Long unmaskProjectId, Long unmaskProductId) {
		if (unmaskProjectId == null || unmaskProductId == null) {
			throw new ValidationException("projectId or productId can't be null");
		}

		if (!projectDao.existsByIdAndActive(unmaskProjectId, true)) {
			throw new NotFoundException(String.format("No project is found having id [%s] ", unmask(unmaskProjectId)));
		}
		if (!projectProductDao.existsByProjectIdAndProductDetailIdAndActiveTrue(unmaskProjectId, unmaskProductId)) {
			throw new NotFoundException(String.format("No product is found having id [%s] in project having id [%s]",
					unmask(unmaskProductId), unmask(unmaskProjectId)));
		}
	}

	@Override
	@Secured(AuthorityUtils.LICENSE_FETCH)
	public LicenseResponse findById(Long id) {
		User user = getUser();
		Long unmaskId = unmask(id);
		Set<String> roles = user.getRoles().stream().map(role -> role.getName()).collect(Collectors.toSet());
		LicenseResponse response;
		if (roles.contains("Customer")) {
			response = licenseDao.findByIdAndProjectProductProjectCustomerEmailAndActive(unmaskId, user.getEmail(),
					true);
		} else {
			Boolean isProjectManager = false;
			if (roles.contains("Project Manager")) {
				isProjectManager = true;
				roles.remove("Project Manager");
			}
			if (roles.isEmpty() && isProjectManager) {
				response = licenseDao.findByIdAndProjectProductProjectProjectManagerIdAndActive(unmaskId,
						user.getUserId(), true);
			} else {
				response = licenseDao.findByIdAndActive(unmaskId, true);
			}
		}

		if (response != null) {
			response.setProjectProductResponse(projectProductService.findById(response.getProjectProductId()));
		} else {
			throw new NotFoundException(String.format("License didn't exist having id [%s]", id));
		}
		return response;
	}

	@Override
	@Secured(AuthorityUtils.LICENSE_FETCH)
	public List<LicenseResponse> findAll() {
		List<LicenseResponse> responseList = licenseDao.findAllByActive(true);
		if (responseList.isEmpty() || responseList == null) {
			throw new NotFoundException("no license found");
		}
		for (LicenseResponse iterate : responseList) {
			iterate.setProjectProductResponse(
					projectProductDao.findByIdAndActive(unmask(iterate.getProjectProductId()), true));
			iterate.getProjectProductResponse().setProductDetailResponse(productDetailDao
					.findByIdAndActive(unmask(iterate.getProjectProductResponse().getProductDetailId()), true));
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
	@Secured(AuthorityUtils.LICENSE_FETCH)
	public Resource findAllPdf() {
		List<LicenseResponse> licenseResponseList = findAll();
		String fileName = pdfDirectory + "AllLicenses.pdf";
		createPdf(licenseResponseList, fileName, "licenses");
		return FileStorageService.fetchFile(fileName);
	}

	@Override
	@Secured(AuthorityUtils.LICENSE_UPDATE)
	public LicenseResponse generateKey(Long id, LicenseRequest request) {
		Long unmaskId = unmask(id);
		LicenseResponse license = licenseDao.findByIdAndActive(unmaskId, true);
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
		int rows = licenseDao.update(unmaskId, request.getAccessId(), license.getGeneratedKey(), license.getName(),
				getUserId(), new Date());
		if (rows > 0) {
			logger.info(" License {} updated successfully", unmaskId);
		}
		LicenseResponse response = licenseDao.findResponseByIdAndActive(unmaskId, true);
		response.setProjectProductResponse(projectProductDao.findResponseById(unmask(response.getProjectProductId())));
		return response;
	}

	@Override
	@Secured(AuthorityUtils.LICENSE_FETCH)
	public List<LicenseResponse> findByProjectIdAndProductId(Long projectId, Long productDetailId) {
		User user = getUser();
		Long unmaskProjectId = unmask(projectId);
		Long unmaskedProductId = unmask(productDetailId);
		Set<String> roles = user.getRoles().stream().map(role -> role.getName()).collect(Collectors.toSet());
		validate(unmaskProjectId, unmaskedProductId);
		List<LicenseResponse> responseList = new ArrayList<LicenseResponse>();
		if (roles.contains("Customer")) {
			responseList = licenseDao
					.findByProjectProductProductDetailIdAndProjectProductProjectIdAndProjectProductProjectCustomerEmailAndActive(
							unmaskedProductId, unmaskProjectId, user.getEmail(), true);
		} else {
			Boolean isProjectManager = false;
			if (roles.contains("Project Manager")) {
				isProjectManager = true;
				roles.remove("Project Manager");
			}
			if (roles.isEmpty() && isProjectManager) {
				responseList = licenseDao
						.findByProjectProductProductDetailIdAndProjectProductProjectIdAndProjectProductProjectProjectManagerIdAndActive(
								unmaskedProductId, unmaskProjectId, user.getUserId(), true);

			} else {
				responseList = licenseDao.findByProjectProductProductDetailIdAndProjectProductProjectIdAndActive(
						unmaskedProductId, unmaskProjectId, true);
			}
		}

		for (LicenseResponse iterate1 : responseList) {
			iterate1.setProjectProductResponse(
					projectProductDao.findByIdAndActive(unmask(iterate1.getProjectProductId()), true));
			iterate1.getProjectProductResponse().setProductDetailResponse(productDetailDao
					.findByIdAndActive(unmask(iterate1.getProjectProductResponse().getProductDetailId()), true));
		}
		return responseList;
	}

	@Override
	@Secured(AuthorityUtils.LICENSE_FETCH)
	public Resource findLicensesByProjectIdAndProductIdExcel(Long projectId, Long productId) {
		List<LicenseResponse> licenseResponseList = findByProjectIdAndProductId(projectId, productId);
		ProjectResponse projectResponse = projectDao.findByIdAndActive(unmask(projectId), true);
		ProductDetailResponse productDetailResponse = productDetailDao.findByIdAndActive(unmask(productId), true);

		String fileName = excelDirectory + projectResponse.getProjectTypeName().replaceAll("\\s", "") + "_"
				+ projectResponse.getCustomerName() + "(" + projectResponse.getCustomerEmail() + ")" + "_"
				+ productDetailResponse.getProductCodeName() + "_" + productDetailResponse.getProductFamilyName() + "_"
				+ productDetailResponse.getVersionName() + ".xlsx";

		createExcel(licenseResponseList, fileName, "licenses");
		return FileStorageService.fetchFile(fileName);
	}

	@Override
	@Secured(AuthorityUtils.LICENSE_FETCH)
	public Resource findLicensesByProjectIdAndProductIdPdf(Long projectId, Long productId) {
		List<LicenseResponse> licenseResponseList = findByProjectIdAndProductId(projectId, productId);
		ProjectResponse projectResponse = projectDao.findByIdAndActive(unmask(projectId), true);
		ProductDetailResponse productDetailResponse = productDetailDao.findByIdAndActive(unmask(productId), true);

		String fileName = pdfDirectory + projectResponse.getProjectTypeName().replaceAll("\\s", "") + "_"
				+ projectResponse.getCustomerName() + "(" + projectResponse.getCustomerEmail() + ")" + "_"
				+ productDetailResponse.getProductCodeName() + "_" + productDetailResponse.getProductFamilyName() + "_"
				+ productDetailResponse.getVersionName() + ".pdf";

		createPdf(licenseResponseList, fileName, "licenses");
		return FileStorageService.fetchFile(fileName);

	}

	@Override
	@Secured(AuthorityUtils.LICENSE_UPDATE)
	public LicenseResponse replaceGenerateKey(Long id, LicenseRequest request) {
		Long unmaskId = unmask(id);
		LicenseResponse license = licenseDao.findByIdAndActive(unmaskId, true);
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
		License newLicense = licenseDao.save(new License(license.getCode(), request.getAccessId(),
				request.getAccessId().concat(license.getCode()).concat(UUID.randomUUID().toString()), request.getName(),
				LicenseStatus.ACTIVE, unmask(license.getProjectProductId())));
		LicenseResponse response = licenseDao.findResponseByIdAndActive(newLicense.getId(), true);
		response.setProjectProductResponse(projectProductService.findById(response.getProjectProductId()));
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
			iterate.setProjectProductResponse(
					projectProductDao.findByIdAndActive(unmask(iterate.getProjectProductId()), true));
			iterate.getProjectProductResponse().setProductDetailResponse(productDetailDao
					.findByIdAndActive(unmask(iterate.getProjectProductResponse().getProductDetailId()), true));
		}

		return responseList;
	}

	@Override
	@Secured(AuthorityUtils.LICENSE_FETCH)
	public Resource findLicensesByProjectIdExcel(Long projectId) {

		List<LicenseResponse> licenseResponseList = findByProjectId(projectId);
		ProjectResponse projectResponse = projectDao.findByIdAndActive(unmask(projectId), true);

		String fileName = excelDirectory + projectResponse.getProjectTypeName().replaceAll("\\s", "") + "_"
				+ projectResponse.getCustomerName() + "(" + projectResponse.getCustomerEmail() + ")" + ".xlsx";
		createExcel(licenseResponseList, fileName, "licenses");
		return FileStorageService.fetchFile(fileName);
	}

	@Override
	@Secured(AuthorityUtils.LICENSE_FETCH)
	public Resource findLicensesByProjectIdPdf(Long projectId) {

		List<LicenseResponse> licenseResponseList = findByProjectId(projectId);
		ProjectResponse projectResponse = projectDao.findByIdAndActive(unmask(projectId), true);
		String fileName = pdfDirectory + projectResponse.getProjectTypeName().replaceAll("\\s", "") + "_"
				+ projectResponse.getCustomerName() + "(" + projectResponse.getCustomerEmail() + ")" + ".pdf";
		createPdf(licenseResponseList, fileName, "licenses");
		return FileStorageService.fetchFile(fileName);
	}

	@Override
	@Secured(AuthorityUtils.LICENSE_FETCH)
	public List<ProjectProductGraphResponse> findTotalActiveAndExpiredLicenses() {
		User user = getUser();
		Set<String> roles = user.getRoles().stream().map(role -> role.getName()).collect(Collectors.toSet());
		List<ProjectProductGraphResponse> licenseCounts;
		if (roles.contains("Customer")) {
			licenseCounts = projectProductDao.findTotalActiveAndExpiredLicenseCountByCustomerEmail(user.getEmail());
		} else {
			Boolean isProjectManager = false;
			if (roles.contains("Project Manager")) {
				isProjectManager = true;
				roles.remove("Project Manager");
			}
			if (roles.isEmpty() && isProjectManager) {
				licenseCounts = projectProductDao
						.findTotalActiveAndExpiredLicenseCountByProjectManagerId(user.getUserId());

			} else {
				licenseCounts = projectProductDao.findTotalActiveAndExpiredLicenseCount();
			}
		}
		return licenseCounts;
	}

}
