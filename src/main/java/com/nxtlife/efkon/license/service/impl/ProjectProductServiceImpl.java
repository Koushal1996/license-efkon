package com.nxtlife.efkon.license.service.impl;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.Date;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nxtlife.efkon.license.dao.jpa.LicenseJpaDao;
import com.nxtlife.efkon.license.dao.jpa.ProductDetailJpaDao;
import com.nxtlife.efkon.license.dao.jpa.ProjectJpaDao;
import com.nxtlife.efkon.license.dao.jpa.ProjectProductCommentJpaDao;
import com.nxtlife.efkon.license.dao.jpa.ProjectProductJpaDao;
import com.nxtlife.efkon.license.entity.license.License;
import com.nxtlife.efkon.license.entity.project.product.ProjectProduct;
import com.nxtlife.efkon.license.entity.project.product.ProjectProductComment;
import com.nxtlife.efkon.license.entity.user.User;
import com.nxtlife.efkon.license.enums.ExpirationPeriodType;
import com.nxtlife.efkon.license.enums.LicenseStatus;
import com.nxtlife.efkon.license.enums.LicenseType;
import com.nxtlife.efkon.license.enums.ProjectProductStatus;
import com.nxtlife.efkon.license.ex.NotFoundException;
import com.nxtlife.efkon.license.ex.ValidationException;
import com.nxtlife.efkon.license.service.BaseService;
import com.nxtlife.efkon.license.service.ProjectProductService;
import com.nxtlife.efkon.license.util.AuthorityUtils;
import com.nxtlife.efkon.license.view.SuccessResponse;
import com.nxtlife.efkon.license.view.product.ProductDetailResponse;
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

	private static Logger logger = LoggerFactory.getLogger(ProjectProductServiceImpl.class);

	public void validate(String expirationPeriodType, String licenseType, Integer expirationMonthCount) {
		if (expirationPeriodType != null && !ExpirationPeriodType.matches(expirationPeriodType)) {
			throw new ValidationException(
					String.format("Expiration period type (%s) is not valid", expirationPeriodType));
		}
		if (licenseType != null && !LicenseType.matches(licenseType)) {
			throw new ValidationException(String.format("License type (%s) is not valid", licenseType));
		}
		if (licenseType != null && licenseType.equals(LicenseType.DEMO.name()) && expirationPeriodType != null
				&& expirationPeriodType.equals(ExpirationPeriodType.LIFETIME.name())) {
			throw new ValidationException("Demo license can't be for lifetime");
		}
		if (expirationPeriodType != null && expirationPeriodType.equals(ExpirationPeriodType.LIMITED.name())
				&& expirationMonthCount == null) {
			throw new ValidationException("Expiration month count can't be null for limited expiration period");
		}
	}

	public void validate(ProjectProductRequest request) {
		if (!projectDao.existsByIdAndActive(request.getProjectId(), true)) {
			throw new ValidationException(String.format("Project (%s) not exist", mask(request.getProjectId())));
		}
		if (!productDetailDao.existsByIdAndActive(request.getProductDetailId(), true)) {
			throw new ValidationException(
					String.format("Product detail (%s) not exist", mask(request.getProductDetailId())));
		}
		validate(request.getExpirationPeriodType(), request.getLicenseType(), request.getExpirationMonthCount());
	}

	private ProjectProductResponse getProjectProductResponse(ProjectProduct projectProduct, Long projectId,
			Long productDetailId) {
		ProjectProductResponse response = ProjectProductResponse.get(projectProduct);
		response.setProjectResponse(projectDao.findResponseById(projectId));
		ProductDetailResponse productDetailResponse = productDetailDao.findResponseById(productDetailId);
		response.setProductDetailResponse(productDetailResponse);
		return response;
	}

	/**
	 * this method used to set end date according to start date and expiration
	 * month count
	 * <p>
	 * if addition of month of start date and expiration month count greater
	 * than 12 then year will be incremented and month will be add result minus
	 * 12.
	 *
	 * @return String
	 */
	private String setEndDate(String startDate, Integer expirationMonthCount) {
		if (startDate == null || expirationMonthCount == null) {
			return null;
		}
		try {
			LocalDate endDate = LocalDate.parse(startDate, DateTimeFormatter.ofPattern("yyyy-MM-dd"));
			endDate = endDate.plusMonths(expirationMonthCount);
			return endDate.format(DateTimeFormatter.ofPattern("yyyy-MM-dd"));
		} catch (DateTimeParseException ex) {
			throw new ValidationException(String.format("Start date (%s) isn't valid", startDate));
		}

	}

	@Override
	@Secured(AuthorityUtils.PROJECT_PRODUCT_CREATE)
	public ProjectProductResponse save(ProjectProductRequest request) {
		validate(request);
//		if (projectProductDao.existsByProjectIdAndProductDetailId(request.getProjectId(),
//				request.getProductDetailId())) {
//			throw new ValidationException(String.format("This product detail(%s) already assigned with project (%s)",
//					mask(request.getProductDetailId()), mask(request.getProjectId())));
//		}
		ProjectProduct projectProduct = request.toEntity();
		String endDate;
		if (request.getExpirationPeriodType().equals(ExpirationPeriodType.LIMITED.name())) {
			endDate = setEndDate(request.getStartDate(), request.getExpirationMonthCount());
			projectProduct.setEndDate(endDate);
		}
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
		if (!projectProduct.getProjectId().equals(request.getProjectId())) {
			throw new ValidationException(String.format("Project (%s) can't be update", mask(request.getProjectId())));
		}
		if (!projectProduct.getProductDetailId().equals(request.getProductDetailId())) {
			throw new ValidationException(
					String.format("Product detail (%s) can't be update", mask(request.getProjectId())));
		}
		validate(request.getExpirationPeriodType(), request.getLicenseType(), request.getExpirationMonthCount());
		int rows = projectProductDao.update(unmaskId, request.getLicenseCount(),
				LicenseType.valueOf(request.getLicenseType()),
				ExpirationPeriodType.valueOf(request.getExpirationPeriodType()), request.getExpirationMonthCount(),
				request.getStartDate(), setEndDate(request.getStartDate(), request.getExpirationMonthCount()),
				getUserId(), new Date());
		if (rows > 0) {
			logger.info("Project product {} updated successfully", unmaskId);
		}
		ProjectProductResponse projectProductResponse = projectProductDao.findResponseById(unmaskId);
		projectProductResponse.setProductDetailResponse(
				productDetailDao.findResponseById(unmask(projectProductResponse.getProductDetailId())));
		projectProductResponse
				.setProjectResponse(projectDao.findResponseById(unmask(projectProductResponse.getProjectId())));
		return null;
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
			projectProduct.setProductDetailResponse(
					productDetailDao.findResponseById(unmask(projectProduct.getProductDetailId())));
			projectProduct.setProjectResponse(projectDao.findResponseById(unmask(projectProduct.getProjectId())));
			projectProduct.setComments(projectProductCommentDao.findByProjectProductId(unmask(projectProduct.getId())));
		});
		return projectProductResponseList;
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
			projectProductResponse.setProductDetailResponse(
					productDetailDao.findResponseById(unmask(projectProductResponse.getProductDetailId())));
			projectProductResponse
					.setProjectResponse(projectDao.findResponseById(unmask(projectProductResponse.getProjectId())));
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
			if (status.equals(ProjectProductStatus.REJECT) && projectProductStatus.equals(ProjectProductStatus.DRAFT)) {
				throw new ValidationException("You can't reject project product in draft mode");
			}
			int rows = projectProductDao.update(unmaskId, status, getUserId(), new Date());
			if (comment != null && !comment.isEmpty()) {
				projectProductCommentDao.save(new ProjectProductComment(comment, getUserId(), status.name(), unmaskId));
			}
			ProjectProductResponse projectProductResponse = projectProductDao.findByIdAndActive(unmaskId, true);
			if (projectProductResponse != null) {
				projectProductResponse.setProductDetailResponse(
						productDetailDao.findResponseById(unmask(projectProductResponse.getProductDetailId())));
				projectProductResponse
						.setProjectResponse(projectDao.findResponseById(unmask(projectProductResponse.getProjectId())));
				if (rows > 0) {
					logger.info("Project product {} approved successfully", unmaskId);
					Integer licenseCount = projectProductDao.findLicenseCountById(unmaskId);
					for (int i = 0; i < licenseCount; i++) {
						licenseDao.save(
								new License(
										String.format("EF-%s-%s-%s-%s-%s-%04d-%s-%s",
												projectProductResponse.getProjectResponse().getCustomerCode(),
												projectProductResponse.getProductDetailResponse()
														.getProductFamilyCode(),
												projectProductResponse.getProductDetailResponse().getProductCode(),
												getUser().getCode(), projectProductResponse.getLicenseType().getCode(),
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
	@Secured(AuthorityUtils.PROJECT_PRODUCT_DELETE)
	public SuccessResponse delete(Long id) {
		Long unmaskId = unmask(id);
		if (!projectProductDao.existsById(unmaskId)) {
			throw new NotFoundException(String.format("Project product (%s) not found", id));
		}
		if (!licenseDao.existsByProjectProductIdAndActive(unmaskId, true)) {
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

}
