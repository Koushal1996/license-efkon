package com.nxtlife.efkon.license.service.impl;

import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

import javax.annotation.PostConstruct;

import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.xssf.streaming.SXSSFWorkbook;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.PageSize;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;
import com.nxtlife.efkon.license.dao.jpa.LicenseJpaDao;
import com.nxtlife.efkon.license.dao.jpa.ProductDetailJpaDao;
import com.nxtlife.efkon.license.dao.jpa.ProjectJpaDao;
import com.nxtlife.efkon.license.dao.jpa.ProjectProductJpaDao;
import com.nxtlife.efkon.license.dao.jpa.UserJpaDao;
import com.nxtlife.efkon.license.entity.license.License;
import com.nxtlife.efkon.license.entity.user.User;
import com.nxtlife.efkon.license.enums.LicenseStatus;
import com.nxtlife.efkon.license.enums.ProjectProductStatus;
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
import com.nxtlife.efkon.license.view.license.LicenseReportResponse;
import com.nxtlife.efkon.license.view.license.LicenseRequest;
import com.nxtlife.efkon.license.view.license.LicenseResponse;
import com.nxtlife.efkon.license.view.product.ProductDetailResponse;
import com.nxtlife.efkon.license.view.project.ProjectResponse;
import com.nxtlife.efkon.license.view.project.product.ProjectProductGraphResponse;
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

	@Autowired
	private ProductDetailJpaDao productDetailDao;

	@Autowired
	private UserJpaDao userDao;

	@Value("${file.upload-pdf-dir}")
	private String pdfDirectory;

	@Value("${file.upload-excel-dir}")
	private String excelDirectory;

	private static Logger logger = LoggerFactory.getLogger(LicenseServiceImpl.class);

	@PostConstruct
	public void init() {
		try {
			Files.createDirectories(Paths.get(excelDirectory));
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

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
				columnValues.add(iterate.getProjectProduct().getProductDetail().getProductCodeName() == null ? "NA"
						: iterate.getProjectProduct().getProductDetail().getProductCodeName());
				columnValues.add(iterate.getProjectProduct().getProductDetail().getProductFamilyName() == null ? "NA"
						: iterate.getProjectProduct().getProductDetail().getProductFamilyName());
				columnValues.add(iterate.getProjectProduct().getProductDetail().getVersionName() == null ? "NA"
						: iterate.getProjectProduct().getProductDetail().getVersionName());
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
			throw new ValidationException(String.format("Couldn't create excel file because of %s", e.getMessage()));
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
				columnValues.add(iterate.getProjectProduct().getProductDetail().getProductCodeName() == null ? "NA"
						: iterate.getProjectProduct().getProductDetail().getProductCodeName());
				columnValues.add(iterate.getProjectProduct().getProductDetail().getProductFamilyName() == null ? "NA"
						: iterate.getProjectProduct().getProductDetail().getProductFamilyName());
				columnValues.add(iterate.getProjectProduct().getProductDetail().getVersionName() == null ? "NA"
						: iterate.getProjectProduct().getProductDetail().getVersionName());
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
			response.setProjectProduct(projectProductService.findById(response.getProjectProductId()));
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
			iterate.setProjectProduct(projectProductDao.findByIdAndActive(unmask(iterate.getProjectProductId()), true));
			iterate.getProjectProduct().setProductDetail(
					productDetailDao.findByIdAndActive(unmask(iterate.getProjectProduct().getProductDetailId()), true));
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
		response.setProjectProduct(projectProductDao.findResponseById(unmask(response.getProjectProductId())));
		return response;
	}

	@SuppressWarnings("resource")
	@Override
	@Secured(AuthorityUtils.LICENSE_UPDATE)
	public List<LicenseResponse> generateLicenseKeyFromExcel(MultipartFile file, Long projectProductId) {
		if (file == null || file.isEmpty() || file.getSize() == 0)
			throw new ValidationException("Pls upload valid excel file.");

		if (projectProductId == null) {
			throw new ValidationException("project product id can't be null");
		}

		Long unmaskId = unmask(projectProductId);

		ProjectProductResponse projectProductResponse = projectProductDao.findByIdAndActive(unmaskId, true);

		if (projectProductResponse == null) {
			throw new NotFoundException(String.format("project product having id (%s) didn't exist", projectProductId));
		}

		List<LicenseResponse> licenseResponse = licenseDao.findByProjectProductIdAndAccessIdIsNullAndActive(unmaskId,
				true);

		try {
			XSSFWorkbook workbook = new XSSFWorkbook(file.getInputStream());
			XSSFSheet worksheet = workbook.getSheetAt(0);
			if (worksheet == null) {
				throw new NotFoundException("sheet not found");
			}

			if (licenseResponse.size() != (worksheet.getPhysicalNumberOfRows() - 1)) {
				throw new ValidationException(String.format(
						"total number of license count whose keys are not generated of project product having id (%s) are (%s) but number of access id in excel for creating licenses is (%s) ",
						projectProductId, licenseResponse.size(), (worksheet.getPhysicalNumberOfRows() - 1)));
			}

			for (int i = 1; i < worksheet.getPhysicalNumberOfRows(); i++) {

				XSSFRow row = worksheet.getRow(i);

				LicenseResponse license = licenseResponse.get(i - 1);

				if (row.getCell(1) != null) {
					license.setAccessId(row.getCell(1).toString());
					license.setGeneratedKey(
							row.getCell(1).toString().concat(license.getCode()) + UUID.randomUUID().toString());
				} else {
					throw new ValidationException(String.format("Access id is not present in (%s) row of excel ", i));
				}

				if (row.getCell(2) != null) {
					license.setName(row.getCell(2).toString());
				}

				int rows = licenseDao.update(unmask(license.getId()), license.getAccessId(), license.getGeneratedKey(),
						license.getName(), getUserId(), new Date());

				if (rows > 0) {
					logger.info(" License {} updated successfully", unmaskId);
				}

			}
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}

		licenseResponse = licenseDao.findByProjectProductIdAndActive(unmaskId, true);
		projectProductResponse = projectProductDao.findResponseById(unmaskId);

		for (LicenseResponse response : licenseResponse) {
			response.setProjectProduct(projectProductResponse);
		}

		return licenseResponse;
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
			iterate1.setProjectProduct(
					projectProductDao.findByIdAndActive(unmask(iterate1.getProjectProductId()), true));
			iterate1.getProjectProduct().setProductDetail(productDetailDao
					.findByIdAndActive(unmask(iterate1.getProjectProduct().getProductDetailId()), true));
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
			iterate.getProjectProduct().setProductDetail(
					productDetailDao.findByIdAndActive(unmask(iterate.getProjectProduct().getProductDetailId()), true));

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

	@Override
	@Secured(AuthorityUtils.LICENSE_FETCH)
	public List<Map<String, Integer>> licenseReport() {
		User user = getUser();
		Set<String> roles = user.getRoles().stream().map(role -> role.getName()).collect(Collectors.toSet());
		List<Map<String, Integer>> licenseCounts;
		if (roles.contains("Customer")) {
			licenseCounts = licenseDao.findTotalLicenseCountByCustomerEmail(user.getEmail());
		} else {
			Boolean isProjectManager = false;
			if (roles.contains("Project Manager")) {
				isProjectManager = true;
				roles.remove("Project Manager");
			}
			if (roles.isEmpty() && isProjectManager) {
				licenseCounts = licenseDao.findTotalLicenseCountByProjectManagerId(user.getUserId());

			} else {
				licenseCounts = licenseDao.findTotalLicenseCount();
			}
		}

		if (licenseCounts.isEmpty() || licenseCounts == null) {
			throw new NotFoundException("no license found");
		}

		return licenseCounts;
	}

	@Override
	@Secured(AuthorityUtils.LICENSE_FETCH)
	public List<LicenseReportResponse> licenseReportByEmail(String email) {

		if (email == null) {
			throw new ValidationException("email can't be null");
		}

		if (!userDao.existsByEmail(email)) {
			throw new NotFoundException(String.format("no customer found having email (%s)", email));
		}

		User user = getUser();
		Set<String> roles = user.getRoles().stream().map(role -> role.getName()).collect(Collectors.toSet());
		List<LicenseReportResponse> licenseReportResponse;
		if (roles.contains("Customer")) {
			licenseReportResponse = projectProductDao.findLicenseReportByCustomerEmailAndStatus(user.getEmail(),
					ProjectProductStatus.APPROVED);
		} else {
			Boolean isProjectManager = false;
			if (roles.contains("Project Manager")) {
				isProjectManager = true;
				roles.remove("Project Manager");
			}
			if (roles.isEmpty() && isProjectManager) {
				licenseReportResponse = projectProductDao.findLicenseReportByCustomerEmailAndStatusByProjectManagerId(
						user.getEmail(), ProjectProductStatus.APPROVED, user.getUserId());

			} else {
				licenseReportResponse = projectProductDao.findLicenseReportByCustomerEmailAndStatus(email,
						ProjectProductStatus.APPROVED);
			}
		}

		if (licenseReportResponse == null || licenseReportResponse.isEmpty()) {
			throw new NotFoundException(String.format("No License found of customer having email (%s)", email));
		}

		return licenseReportResponse;
	}

}
