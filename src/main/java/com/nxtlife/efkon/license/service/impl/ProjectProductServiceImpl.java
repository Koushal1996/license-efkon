package com.nxtlife.efkon.license.service.impl;

import java.io.FileOutputStream;
import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.xssf.streaming.SXSSFWorkbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.PageSize;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;
import com.nxtlife.efkon.license.dao.jpa.LicenseJpaDao;
import com.nxtlife.efkon.license.dao.jpa.LicenseTypeJpaDao;
import com.nxtlife.efkon.license.dao.jpa.ProductDetailJpaDao;
import com.nxtlife.efkon.license.dao.jpa.ProjectJpaDao;
import com.nxtlife.efkon.license.dao.jpa.ProjectProductCommentJpaDao;
import com.nxtlife.efkon.license.dao.jpa.ProjectProductJpaDao;
import com.nxtlife.efkon.license.dao.jpa.RenewConfigurationJpaDao;
import com.nxtlife.efkon.license.entity.license.License;
import com.nxtlife.efkon.license.entity.license.LicenseType;
import com.nxtlife.efkon.license.entity.project.product.ProjectProduct;
import com.nxtlife.efkon.license.entity.project.product.ProjectProductComment;
import com.nxtlife.efkon.license.entity.user.User;
import com.nxtlife.efkon.license.enums.ExpirationPeriodType;
import com.nxtlife.efkon.license.enums.LicenseStatus;
import com.nxtlife.efkon.license.enums.LicenseTypeEnum;
import com.nxtlife.efkon.license.enums.ProjectProductStatus;
import com.nxtlife.efkon.license.ex.NotFoundException;
import com.nxtlife.efkon.license.ex.ValidationException;
import com.nxtlife.efkon.license.service.BaseService;
import com.nxtlife.efkon.license.service.FileStorageService;
import com.nxtlife.efkon.license.service.ProjectProductService;
import com.nxtlife.efkon.license.util.AuthorityUtils;
import com.nxtlife.efkon.license.util.DateUtil;
import com.nxtlife.efkon.license.util.ITextPdfUtil;
import com.nxtlife.efkon.license.util.PdfHeaderFooterPageEvent;
import com.nxtlife.efkon.license.util.PdfTableUtil;
import com.nxtlife.efkon.license.util.WorkBookUtil;
import com.nxtlife.efkon.license.view.RenewConfigurationResponse;
import com.nxtlife.efkon.license.view.SuccessResponse;
import com.nxtlife.efkon.license.view.product.ProductDetailResponse;
import com.nxtlife.efkon.license.view.project.product.ProjectProductGraphResponse;
import com.nxtlife.efkon.license.view.project.product.ProjectProductRequest;
import com.nxtlife.efkon.license.view.project.product.ProjectProductResponse;

@Service("projectProductServiceImpl")
@Transactional
public class ProjectProductServiceImpl extends BaseService implements ProjectProductService {

	@Autowired
	private ProjectProductJpaDao projectProductDao;

	@Autowired
	private ProjectJpaDao projectDao;

	@Autowired
	private ProductDetailJpaDao productDetailDao;

	@Autowired
	private ProjectProductCommentJpaDao projectProductCommentDao;

	@Autowired
	private LicenseJpaDao licenseDao;

	@Autowired
	private LicenseTypeJpaDao licenseTypeJpaDao;

	@Autowired
	private RenewConfigurationJpaDao renewConfigurationJpaDao;

	@Value("${file.upload-excel-dir}")
	private String excelDirectory;

	@Value("${file.upload-pdf-dir}")
	private String pdfDirectory;

	private static Logger logger = LoggerFactory.getLogger(ProjectProductServiceImpl.class);

	private void createExcel(List<ProjectProductResponse> projectProductResponseList, String fileName, String heading) {
		SXSSFWorkbook workbook = new SXSSFWorkbook();
		try {
			Sheet sheet = workbook.createSheet(heading);
			List<String> columnHeaders = ProjectProductResponse.projectProductsColumnHeaders();
			CellStyle headerStyle = WorkBookUtil.getHeaderCellStyle(workbook);
			WorkBookUtil.createRow(headerStyle, sheet, columnHeaders, 0);
			Integer row = 1;

			for (ProjectProductResponse iterate : projectProductResponseList) {
				WorkBookUtil.createRow(sheet, iterate.columnValues(), row++);
			}
			FileOutputStream fout = new FileOutputStream(fileName);
			workbook.write(fout);
			workbook.close();
			workbook.dispose();
			fout.close();

		} catch (IOException e) {
			e.printStackTrace();
			throw new ValidationException(String.format("Couldn't create excel because of %s", e.getMessage()));
		}

	}

	private void createPdf(List<ProjectProductResponse> projectProductResponseList, String fileName, String heading) {

		Document document = new Document(PageSize.A4, 10f, 10f, 10f, 30f);
		try {
			FileOutputStream fout = new FileOutputStream(fileName);
			PdfWriter pdfWriter = PdfWriter.getInstance(document, fout);
			List<String> columnHeaders = ProjectProductResponse.projectProductsColumnHeaders();
			int length = columnHeaders.size();
			PdfPTable headerPdfTable = new PdfPTable(length);
			headerPdfTable.setTotalWidth(ProjectProductResponse.columnWidth());
			PdfTableUtil.addTableHeader(headerPdfTable, columnHeaders);
			String generatedDate = DateUtil.get(new Date(), "dd-MM-yyyy HH:mm:ss");
			pdfWriter.setPageEvent(new PdfHeaderFooterPageEvent(heading, headerPdfTable, generatedDate));
			document.open();
			ITextPdfUtil.setProjectProductDocumentProperties(document);
			PdfPTable pdfTable = new PdfPTable(length);
			pdfTable.setTotalWidth(ProjectProductResponse.columnWidth());

			for (ProjectProductResponse iterate : projectProductResponseList) {
				PdfTableUtil.addTableRows(pdfTable, iterate.columnValues());
			}
			pdfTable.setWidthPercentage(95f);
			document.add(pdfTable);
			document.close();
			fout.close();
		} catch (DocumentException | IOException e) {
			e.printStackTrace();
		}

	}

	private void validate(String expirationPeriodType, String licenseType, Integer expirationMonthCount) {
		if (expirationPeriodType != null && !ExpirationPeriodType.matches(expirationPeriodType)) {
			throw new ValidationException(
					String.format("Expiration period type (%s) is not valid", expirationPeriodType));
		}
		if (licenseType != null && !LicenseTypeEnum.matches(licenseType)) {
			throw new ValidationException(String.format("License type (%s) is not valid", licenseType));
		}
		if (licenseType != null && licenseType.equals(LicenseTypeEnum.DEMO.name()) && expirationPeriodType != null
				&& expirationPeriodType.equals(ExpirationPeriodType.LIFETIME.name())) {
			throw new ValidationException("Demo license can't be for lifetime");
		}
		if (expirationPeriodType != null && expirationPeriodType.equals(ExpirationPeriodType.LIMITED.name())
				&& expirationMonthCount == null) {
			throw new ValidationException("Expiration month count can't be null for limited expiration period");
		}
	}

	private void validate(ProjectProductRequest request, String licenseType) {
		if (!projectDao.existsByIdAndActive(request.getProjectId(), true)) {
			throw new ValidationException(String.format("Project (%s) not exist", mask(request.getProjectId())));
		}
		if (!productDetailDao.existsByIdAndActive(request.getProductDetailId(), true)) {
			throw new ValidationException(
					String.format("Product detail (%s) not exist", mask(request.getProductDetailId())));
		}
		validate(request.getExpirationPeriodType(), licenseType, request.getExpirationMonthCount());
	}

	private ProjectProductResponse getProjectProductResponse(ProjectProduct projectProduct, Long projectId,
			Long productDetailId) {
		ProjectProductResponse response = ProjectProductResponse.get(projectProduct);
		response.setProject(projectDao.findResponseById(projectId));
		ProductDetailResponse productDetailResponse = productDetailDao.findResponseById(productDetailId);
		response.setProductDetail(productDetailResponse);
		return response;
	}

	/**
	 * this method used to set end date according to start date and expiration month
	 * count
	 * <p>
	 * if addition of month of start date and expiration month count greater than 12
	 * then year will be incremented and month will be add result minus 12.
	 *
	 * @return String
	 */
	private String setEndDate(String startDate, Integer expirationMonthCount) {
		if (startDate == null || expirationMonthCount == null) {
			return null;
		}
		try {
			LocalDate endDate = LocalDate.parse(startDate, DateTimeFormatter.ofPattern("yyyy-MM-dd"));
			if (endDate.isBefore(LocalDate.now())) {
				throw new ValidationException(String.format("Start date of license (%s) can't be in past", startDate));
			}
			endDate = endDate.plusMonths(expirationMonthCount);
			endDate = endDate.minusDays(1);
			return endDate.format(DateTimeFormatter.ofPattern("yyyy-MM-dd"));
		} catch (DateTimeParseException ex) {
			throw new ValidationException(String.format("Start date (%s) isn't valid", startDate));
		}

	}

	@Override
	@Secured(AuthorityUtils.PROJECT_PRODUCT_CREATE)
	public ProjectProductResponse save(ProjectProductRequest request) {
		Optional<LicenseType> licenseType = licenseTypeJpaDao.findById(request.getLicenseTypeId());
		if (!licenseType.isPresent()) {
			throw new ValidationException("License type is not valid");
		}
		validate(request, licenseType.get().getName());
		ProjectProduct projectProduct = request.toEntity();
		String endDate;
		Integer expirationMonth = request.getExpirationMonthCount();
		if (request.getLicenseTypeId() != null) {
			if (request.getExpirationMonthCount() != null
					&& request.getExpirationMonthCount() > licenseType.get().getMaxMonthCount()) {
				throw new ValidationException(
						String.format("License month (%d) limit exceed", licenseType.get().getMaxMonthCount()));
			}
			if (request.getExpirationMonthCount() == null) {
				expirationMonth = licenseType.get().getMaxMonthCount();
			}
		}

		endDate = setEndDate(request.getStartDate(), expirationMonth);
		projectProduct.setEndDate(endDate);
		projectProduct.setStatus(ProjectProductStatus.DRAFT);
		projectProductDao.save(projectProduct);
		return getProjectProductResponse(projectProduct, request.getProjectId(), request.getProductDetailId());
	}

	@Override
	@Secured(AuthorityUtils.PROJECT_PRODUCT_UPDATE)
	public ProjectProductResponse update(Long id, ProjectProductRequest request) {
		Long unmaskId = unmask(id);
		ProjectProductResponse projectProduct = projectProductDao.findResponseById(unmaskId);
		if (projectProduct == null) {
			throw new NotFoundException(String.format("Project product (%s) not found", id));
		}
		if (!projectProduct.getStatus().equals(ProjectProductStatus.DRAFT)) {
			throw new ValidationException("Project product can't be updated after submitting");
		}
		Optional<LicenseType> licenseType = licenseTypeJpaDao.findById(request.getLicenseTypeId());
		if (!licenseType.isPresent()) {
			throw new ValidationException("License type is not valid");
		}
		validate(request.getExpirationPeriodType(), licenseType.get().getName(), request.getExpirationMonthCount());

		Integer expirationMonth = request.getExpirationMonthCount();
		if (request.getLicenseTypeId() != null) {
			if (request.getExpirationMonthCount() != null
					&& request.getExpirationMonthCount() > licenseType.get().getMaxMonthCount()) {
				throw new ValidationException(
						String.format("License month (%d) limit exceed", licenseType.get().getMaxMonthCount()));
			}
			if (request.getExpirationMonthCount() == null) {
				expirationMonth = licenseType.get().getMaxMonthCount();
			}
		}
		int rows = projectProductDao.update(unmaskId,
				request.getLicenseCount() == null ? projectProduct.getLicenseCount() : request.getLicenseCount(),
				request.getLicenseTypeId() == null ? projectProduct.getLicenseTypeId() : request.getLicenseTypeId(),
				request.getExpirationPeriodType() == null ? projectProduct.getExpirationPeriodType()
						: ExpirationPeriodType.valueOf(request.getExpirationPeriodType()),
				request.getExpirationMonthCount() == null ? projectProduct.getExpirationMonthCount()
						: request.getExpirationMonthCount(),
				request.getStartDate() == null ? projectProduct.getStartDate() : request.getStartDate(),
				setEndDate(request.getStartDate(), expirationMonth), getUserId(), new Date());
		if (rows > 0) {
			logger.info("Project product {} updated successfully", unmaskId);
		}
		ProjectProductResponse projectProductResponse = projectProductDao.findResponseById(unmaskId);
		projectProductResponse.setProductDetail(
				productDetailDao.findResponseById(unmask(projectProductResponse.getProductDetailId())));
		projectProductResponse.setProject(projectDao.findResponseById(unmask(projectProductResponse.getProjectId())));
		return projectProductResponse;
	}

	@Override
	@Secured(AuthorityUtils.PROJECT_PRODUCT_FETCH)
	public List<ProjectProductResponse> findAll() {
		User user = getUser();
		Set<String> roles = user.getRoles().stream().map(role -> role.getName()).collect(Collectors.toSet());
		List<ProjectProductResponse> projectProductResponseList;
		if (roles.contains("Customer")) {
			projectProductResponseList = projectProductDao.findByProjectCustomerEmailAndActive(user.getEmail(), true);
		} else {
			Boolean isProjectManager = false;
			if (roles.contains("Project Manager")) {
				isProjectManager = true;
				roles.remove("Project Manager");
			}
			if (roles.isEmpty() && isProjectManager) {
				projectProductResponseList = projectProductDao.findByProjectProjectManagerIdAndActive(user.getUserId(),
						true);
			} else {
				projectProductResponseList = projectProductDao.findByActive(true);
			}
		}
		projectProductResponseList = projectProductResponseList.stream()
				.filter(projectProduct -> !(projectProduct.getStatus().equals(ProjectProductStatus.DRAFT)
						&& !projectProduct.getCreatedById().equals(getUserId())))
				.collect(Collectors.toList());
		projectProductResponseList.forEach(projectProduct -> {
			projectProduct
					.setProductDetail(productDetailDao.findResponseById(unmask(projectProduct.getProductDetailId())));
			projectProduct.setProject(projectDao.findResponseById(unmask(projectProduct.getProjectId())));
			projectProduct.setComments(projectProductCommentDao.findByProjectProductId(unmask(projectProduct.getId())));
			projectProduct
					.setLicenses(licenseDao.findByProjectProductIdAndActive(unmask(projectProduct.getId()), true));
		});
		return projectProductResponseList;
	}

	@Override
	@Secured(AuthorityUtils.PROJECT_PRODUCT_FETCH)
	public Resource findAllExcel() {
		List<ProjectProductResponse> projectProductResponseList = findAll();
		String fileName = excelDirectory + "Allproducts.xlsx";
		createExcel(projectProductResponseList, fileName, "ProjectProducts");
		return FileStorageService.fetchFile(fileName);
	}

	@Override
	@Secured(AuthorityUtils.PROJECT_PRODUCT_FETCH)
	public Resource findAllPdf() {
		List<ProjectProductResponse> projectProductResponseList = findAll();
		String fileName = pdfDirectory + "Allproducts.pdf";
		createPdf(projectProductResponseList, fileName, "ProjectProducts");
		return FileStorageService.fetchFile(fileName);
	}

	@Override
	@Secured(AuthorityUtils.PROJECT_PRODUCT_FETCH)
	public List<ProjectProductResponse> findByProjectId(Long projectId) {
		User user = getUser();
		Long unmaskProjectId = unmask(projectId);
		Set<String> roles = user.getRoles().stream().map(role -> role.getName()).collect(Collectors.toSet());
		List<ProjectProductResponse> projectProductResponseList;
		if (roles.contains("Customer")) {
			projectProductResponseList = projectProductDao
					.findByProjectIdAndProjectCustomerEmailAndActive(unmaskProjectId, user.getEmail(), true);
		} else {
			Boolean isProjectManager = false;
			if (roles.contains("Project Manager")) {
				isProjectManager = true;
				roles.remove("Project Manager");
			}
			if (roles.isEmpty() && isProjectManager) {
				projectProductResponseList = projectProductDao
						.findByProjectIdAndProjectProjectManagerIdAndActive(unmaskProjectId, user.getUserId(), true);
			} else {
				projectProductResponseList = projectProductDao.findByProjectIdAndActive(unmaskProjectId, true);
			}
		}
		projectProductResponseList = projectProductResponseList.stream()
				.filter(projectProduct -> !(projectProduct.getStatus().equals(ProjectProductStatus.DRAFT)
						&& !projectProduct.getCreatedById().equals(getUserId())))
				.collect(Collectors.toList());
		projectProductResponseList.forEach(projectProduct -> {
			projectProduct
					.setProductDetail(productDetailDao.findResponseById(unmask(projectProduct.getProductDetailId())));
			projectProduct.setProject(projectDao.findResponseById(unmask(projectProduct.getProjectId())));
			projectProduct.setComments(projectProductCommentDao.findByProjectProductId(unmask(projectProduct.getId())));
		});
		return projectProductResponseList;
	}

	@Override
	@Secured(AuthorityUtils.PROJECT_PRODUCT_FETCH)
	public Resource findByProjectIdExcel(Long projectId) {
		List<ProjectProductResponse> projectProductResponseList = findByProjectId(projectId);
		String fileName = excelDirectory + "productsByProjectId.xlsx";
		createExcel(projectProductResponseList, fileName, "ProjectProducts");
		return FileStorageService.fetchFile(fileName);
	}

	@Override
	@Secured(AuthorityUtils.PROJECT_PRODUCT_FETCH)
	public Resource findByProjectIdPdf(Long projectId) {
		List<ProjectProductResponse> projectProductResponseList = findByProjectId(projectId);
		String fileName = pdfDirectory + "productsByProjectId.pdf";
		createPdf(projectProductResponseList, fileName, "ProjectProducts");
		return FileStorageService.fetchFile(fileName);
	}

	@Override
	@Secured(AuthorityUtils.PROJECT_PRODUCT_FETCH)
	public ProjectProductResponse findById(Long id) {
		User user = getUser();
		Long unmaskId = unmask(id);
		Set<String> roles = user.getRoles().stream().map(role -> role.getName()).collect(Collectors.toSet());
		ProjectProductResponse projectProductResponse;
		if (roles.contains("Customer")) {
			projectProductResponse = projectProductDao.findByIdAndProjectCustomerEmailAndActive(unmaskId,
					user.getEmail(), true);
		} else {
			Boolean isProjectManager = false;
			if (roles.contains("Project Manager")) {
				isProjectManager = true;
				roles.remove("Project Manager");
			}
			if (roles.isEmpty() && isProjectManager) {
				projectProductResponse = projectProductDao.findByIdAndProjectProjectManagerIdAndActive(unmaskId,
						user.getUserId(), true);
			} else {
				projectProductResponse = projectProductDao.findByIdAndActive(unmaskId, true);
			}
		}
		if (projectProductResponse != null) {
			projectProductResponse.setProductDetail(
					productDetailDao.findResponseById(unmask(projectProductResponse.getProductDetailId())));
			projectProductResponse
					.setProject(projectDao.findResponseById(unmask(projectProductResponse.getProjectId())));
			projectProductResponse.setComments(projectProductCommentDao.findByProjectProductId(unmaskId));
		} else {
			throw new NotFoundException(String.format("Project product (%s) not found", id));
		}
		return projectProductResponse;
	}

	@Override
	public ProjectProductResponse updateStatus(Long id, ProjectProductStatus status, String comment) {
		User user = getUser();
		Long unmaskId = unmask(id);
		Set<String> roles = user.getRoles().stream().map(role -> role.getName()).collect(Collectors.toSet());
		ProjectProductStatus projectProductStatus;
		if (roles.contains("Customer")) {
			projectProductStatus = projectProductDao.findStatusByIdAndProjectCustomerEmailAndActive(unmaskId,
					user.getEmail(), true);
		} else {
			Boolean isProjectManager = false;
			if (roles.contains("Project Manager")) {
				isProjectManager = true;
				roles.remove("Project Manager");
			}
			if (roles.isEmpty() && isProjectManager) {
				projectProductStatus = projectProductDao.findStatusByIdAndProjectProjectManagerIdAndActive(unmaskId,
						user.getUserId(), true);
			} else {
				projectProductStatus = projectProductDao.findStatusByIdAndActive(unmaskId, true);
			}
		}
		if (projectProductStatus != null) {
			if (status.equals(ProjectProductStatus.APPROVED)
					&& !projectProductStatus.equals(ProjectProductStatus.REVIEWED)) {
				throw new ValidationException("You can approve project product after review only");
			}
			if (status.equals(ProjectProductStatus.SUBMIT)
					&& !projectProductStatus.equals(ProjectProductStatus.DRAFT)) {
				throw new ValidationException("You can submit project product after draft only");
			}
			if (status.equals(ProjectProductStatus.REVIEWED)
					&& !projectProductStatus.equals(ProjectProductStatus.SUBMIT)) {
				throw new ValidationException("You can review project product after submit only");
			}
			if (status.equals(ProjectProductStatus.REJECT) && (comment == null || comment.isEmpty())) {
				throw new ValidationException("Comment is required at the reject time");
			}
			if (status.equals(ProjectProductStatus.REJECT) && (projectProductStatus.equals(ProjectProductStatus.DRAFT)
					|| projectProductStatus.equals(ProjectProductStatus.APPROVED))) {
				throw new ValidationException("You can't reject project product in draft and approved mode");
			}
			int rows;
			if (status.equals(ProjectProductStatus.REJECT)) {
				rows = projectProductDao.update(unmaskId, ProjectProductStatus.DRAFT, getUserId(), new Date());
			} else {
				rows = projectProductDao.update(unmaskId, status, getUserId(), new Date());
			}
			if (comment != null && !comment.isEmpty()) {
				projectProductCommentDao.save(new ProjectProductComment(comment, getUserId(), status.name(), unmaskId));
			}
			ProjectProductResponse projectProductResponse = projectProductDao.findByIdAndActive(unmaskId, true);
			if (projectProductResponse != null) {
				projectProductResponse.setProductDetail(
						productDetailDao.findResponseById(unmask(projectProductResponse.getProductDetailId())));
				projectProductResponse
						.setProject(projectDao.findResponseById(unmask(projectProductResponse.getProjectId())));
				if (status.equals(ProjectProductStatus.APPROVED) && rows > 0) {
					logger.info("Project product {} approved successfully", unmaskId);
					Integer licenseCount = projectProductDao.findLicenseCountById(unmaskId);
					for (int i = 0; i < licenseCount; i++) {
						licenseDao.save(new License(
								String.format("EF-%s-%s-%s-%s-%s-%04d-%04d-%s-%s",
										projectProductResponse.getProject().getCustomerCode(),
										projectProductResponse.getProductDetail().getProductFamilyCode(),
										projectProductResponse.getProductDetail().getProductCodeCode(),
										getUser().getCode(), projectProductResponse.getLicenseTypeCode(), (i + 1),
										projectProductResponse.getExpirationMonthCount() == null ? 0
												: projectProductResponse.getExpirationMonthCount(),
										LocalDate
												.parse(projectProductResponse.getStartDate(),
														DateTimeFormatter.ofPattern("yyyy-MM-dd"))
												.format(DateTimeFormatter.ofPattern("ddMMyyyy")),
										projectProductResponse.getEndDate() == null ? "NA"
												: LocalDate
														.parse(projectProductResponse.getEndDate(),
																DateTimeFormatter.ofPattern("yyyy-MM-dd"))
														.format(DateTimeFormatter.ofPattern("ddMMyyyy"))),
								LicenseStatus.ACTIVE, unmaskId));
					}
				}
				projectProductResponse.setComments(projectProductCommentDao.findByProjectProductId(unmaskId));
			}
			return projectProductResponse;
		} else {
			throw new NotFoundException(String.format("Project product (%s) not found", id));
		}
	}

	@Override
	@Secured(AuthorityUtils.PROJECT_PRODUCT_UNDO)
	public ProjectProductResponse undo(Long id, String comment) {
		User user = getUser();
		Long unmaskId = unmask(id);
		Set<String> roles = user.getRoles().stream().map(role -> role.getName()).collect(Collectors.toSet());
		ProjectProductStatus projectProductStatus;
		if (roles.contains("Customer")) {
			throw new ValidationException(
					String.format("you don't have access to undo the project product having id [%s]", id));
		} else {
			Boolean isProjectManager = false;
			if (roles.contains("Project Manager")) {
				isProjectManager = true;
				roles.remove("Project Manager");
			}
			if (roles.isEmpty() && isProjectManager) {
				projectProductStatus = projectProductDao.findStatusByIdAndProjectProjectManagerIdAndActive(unmaskId,
						user.getUserId(), true);
			} else {
				projectProductStatus = projectProductDao.findStatusByIdAndActive(unmaskId, true);
			}
		}
		int rows = 0;

		if (projectProductStatus != null) {
			if (projectProductStatus.equals(ProjectProductStatus.DRAFT)
					|| projectProductStatus.equals(ProjectProductStatus.APPROVED)
					|| projectProductStatus.equals(ProjectProductStatus.REJECT)) {
				throw new ValidationException(String.format(
						"It is not possibe to undo the project product whose status is (%s) ", projectProductStatus));
			}
			if (projectProductStatus.equals(ProjectProductStatus.SUBMIT)) {
				rows = projectProductDao.update(unmaskId, ProjectProductStatus.DRAFT, getUserId(), new Date());
			}
			if (projectProductStatus.equals(ProjectProductStatus.REVIEWED)) {
				rows = projectProductDao.update(unmaskId, ProjectProductStatus.SUBMIT, getUserId(), new Date());
			}
			if (comment != null && !comment.isEmpty()) {
				projectProductCommentDao.save(new ProjectProductComment(comment, getUserId(), "Undo Status", unmaskId));
			}
			if (rows > 0) {
				logger.info("Project product {} undo request accepted successfully", unmaskId);
			}
			ProjectProductResponse projectProductResponse = projectProductDao.findByIdAndActive(unmaskId, true);
			if (projectProductResponse != null) {
				projectProductResponse.setProductDetail(
						productDetailDao.findResponseById(unmask(projectProductResponse.getProductDetailId())));
				projectProductResponse
						.setProject(projectDao.findResponseById(unmask(projectProductResponse.getProjectId())));
				projectProductResponse.setComments(projectProductCommentDao.findByProjectProductId(unmaskId));
			}
			return projectProductResponse;
		} else {
			throw new NotFoundException(String.format("Project product (%s) not found", id));
		}
	}

	@Override
	@Secured(AuthorityUtils.PROJECT_PRODUCT_RENEW)
	public ProjectProductResponse renew(Long id, ProjectProductRequest request) {
		User user = getUser();
		Long unmaskId = unmask(id);
		List<RenewConfigurationResponse> renewConfigurationResponses = renewConfigurationJpaDao.findByActiveTrue();
		RenewConfigurationResponse renewConfiguration = null;
		if (!renewConfigurationResponses.isEmpty()) {
			renewConfiguration = renewConfigurationResponses.get(0);
		} else {
			throw new ValidationException("Renew configuration details not found");
		}
		if (request.getExpirationMonthCount() == null || (renewConfiguration != null
				&& renewConfiguration.getStartDateChange() && request.getStartDate() == null)) {
			throw new ValidationException("Start date and exipration month count is mandatory for renewal");
		}
		if (request.getExpirationMonthCount() < 1) {
			throw new ValidationException("Expiration month can't be less than 1");
		}
		Set<String> roles = user.getRoles().stream().map(role -> role.getName()).collect(Collectors.toSet());
		ProjectProductResponse projectProduct = null;
		if (roles.contains("Customer")) {
			projectProduct = projectProductDao.findByIdAndProjectCustomerEmailAndActive(unmaskId, user.getEmail(),
					true);
		} else {
			Boolean isProjectManager = false;
			if (roles.contains("Project Manager")) {
				isProjectManager = true;
				roles.remove("Project Manager");
			}
			if (roles.isEmpty() && isProjectManager) {
				projectProduct = projectProductDao.findByIdAndProjectProjectManagerIdAndActive(unmaskId,
						user.getUserId(), true);
			} else {
				projectProduct = projectProductDao.findByIdAndActive(unmaskId, true);
			}
		}
		if (projectProduct != null) {
			if (projectProduct.getLicenseTypeName().equals(LicenseTypeEnum.DEMO.name())) {
				throw new ValidationException("You can't renew demo product");
			}
			if (!projectProduct.getStatus().equals(ProjectProductStatus.APPROVED)) {
				throw new ValidationException(
						String.format("You can't renew if project product(%s) not approved", projectProduct.getId()));
			}
			if (request.getStartDate() != null && projectProduct.getEndDate().compareTo(request.getStartDate()) > 1) {
				throw new ValidationException(
						"Start date of renewal license should be greater than end date of previous");
			}
			LocalDate endDate = LocalDate.parse(projectProduct.getEndDate());
			if (renewConfiguration != null && renewConfiguration.getShowBeforeDays() != null) {
				LocalDate date = LocalDate.now().plusDays(renewConfiguration.getShowBeforeDays());
				if (endDate.isAfter(date)) {
					throw new ValidationException(String.format("You can't renew this product now"));
				}
			}

			ProjectProduct renewedProjectProduct = new ProjectProduct(projectProduct.getLicenseCount(),
					unmask(projectProduct.getLicenseTypeId()), projectProduct.getExpirationPeriodType(),
					request.getExpirationMonthCount(),
					request.getStartDate() == null ? projectProduct.getEndDate() : request.getStartDate(),
					setEndDate(request.getStartDate() == null ? projectProduct.getEndDate() : request.getStartDate(),
							request.getExpirationMonthCount()),
					ProjectProductStatus.SUBMIT);
			renewedProjectProduct.settProductDetailId(unmask(projectProduct.getProductDetailId()));
			renewedProjectProduct.settProjectId(unmask(projectProduct.getProjectId()));
			renewedProjectProduct.settPastProjectProductId(unmaskId);
			renewedProjectProduct = projectProductDao.save(renewedProjectProduct);
			projectProductCommentDao.save(new ProjectProductComment("Project Renewed", getUserId(),
					ProjectProductStatus.RENEWED.name(), renewedProjectProduct.getId()));
			ProjectProductResponse projectProductResponse = projectProductDao
					.findResponseById(renewedProjectProduct.getId());
			projectProductResponse.setProductDetail(
					productDetailDao.findResponseById(unmask(projectProductResponse.getProductDetailId())));
			projectProductResponse
					.setProject(projectDao.findResponseById(unmask(projectProductResponse.getProjectId())));
			logger.info("Project product {} renewed successfully", unmaskId);
			projectProductResponse
					.setComments(projectProductCommentDao.findByProjectProductId(renewedProjectProduct.getId()));
			return projectProductResponse;

		} else {
			throw new NotFoundException(String.format("Project product (%s) not found", id));
		}

	}

	@Override
	@Secured(AuthorityUtils.PROJECT_PRODUCT_DELETE)
	public SuccessResponse delete(Long id) {
		Long unmaskId = unmask(id);
		if (!projectProductDao.existsById(unmaskId)) {
			throw new NotFoundException(String.format("Project product (%s) not found", id));
		}
		if (licenseDao.existsByProjectProductIdAndActive(unmaskId, true)) {
			throw new ValidationException(String.format(
					"Project product (%s) can't be delete as some of the project product have got the licenses ", id));
		}
		List<Long> projectProductCommentIds = projectProductCommentDao.findAllIdsByProjectProductIdAndActive(unmaskId,
				true);
		if (!projectProductCommentIds.isEmpty()) {
			projectProductCommentDao.delete(projectProductCommentIds, getUserId(), new Date());
		}
		int rows = projectProductDao.delete(unmaskId, getUserId(), new Date());
		if (rows > 0) {
			logger.info("project product {} successfully deleted", unmaskId);
		}
		return new SuccessResponse(HttpStatus.OK.value(), "Project product successfully deleted");

	}

	@Override
	@Secured(AuthorityUtils.PROJECT_PRODUCT_FETCH)
	public List<ProjectProductGraphResponse> findCountByStatus() {
		User user = getUser();
		Set<String> roles = user.getRoles().stream().map(role -> role.getName()).collect(Collectors.toSet());
		List<ProjectProductGraphResponse> projectProductGraphResponse = null;
		if (roles.contains("Customer")) {
			projectProductGraphResponse = projectProductDao
					.countProductByStatusAndProjectCustomerEmailAndActive(user.getEmail(), true);
		} else {
			Boolean isProjectManager = false;
			if (roles.contains("Project Manager")) {
				isProjectManager = true;
				roles.remove("Project Manager");
			}
			if (roles.isEmpty() && isProjectManager) {
				projectProductGraphResponse = projectProductDao
						.countProductByStatusAndProjectProjectManagerIdAndActive(user.getUserId(), true);
			} else {
				projectProductGraphResponse = projectProductDao.countTotalProductsByStatusAndActive(true);

			}
		}
		ProjectProductStatus pps[] = ProjectProductStatus.values();
		String[] projectProductStatus = new String[pps.length];
		for (int i = 0; i < pps.length; i++) {
			projectProductStatus[i] = pps[i].toString();
		}
		Arrays.sort(projectProductStatus);
		int arrSize = pps.length;
		int responseSize = projectProductGraphResponse.size();
		int i = 0, j = 0;
		if (projectProductGraphResponse == null || projectProductGraphResponse.isEmpty()) {
			for (String status : projectProductStatus) {
				projectProductGraphResponse.add(new ProjectProductGraphResponse(status, 0));
			}
		} else {
			while (i < arrSize && j < responseSize) {
				if (projectProductStatus[i].toString().equals(projectProductGraphResponse.get(j).getStatus())) {
					i++;
					j++;
					continue;
				} else {
					projectProductGraphResponse.add(new ProjectProductGraphResponse(projectProductStatus[i], 0));
					i++;
				}
			}
			while (i < arrSize) {
				projectProductGraphResponse.add(new ProjectProductGraphResponse(projectProductStatus[i], 0));
				i++;
			}
		}
		return projectProductGraphResponse;
	}

}
