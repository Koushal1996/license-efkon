package com.nxtlife.efkon.license.service.impl;

import com.nxtlife.efkon.license.dao.jpa.*;
import com.nxtlife.efkon.license.entity.product.ProductDetail;
import com.nxtlife.efkon.license.entity.project.product.ProjectProduct;
import com.nxtlife.efkon.license.enums.ExpirationPeriodType;
import com.nxtlife.efkon.license.enums.LicenseType;
import com.nxtlife.efkon.license.enums.ProjectProductStatus;
import com.nxtlife.efkon.license.ex.NotFoundException;
import com.nxtlife.efkon.license.ex.ValidationException;
import com.nxtlife.efkon.license.service.BaseService;
import com.nxtlife.efkon.license.service.ProjectProductService;
import com.nxtlife.efkon.license.util.AuthorityUtils;
import com.nxtlife.efkon.license.view.SuccessResponse;
import com.nxtlife.efkon.license.view.product.ProductCodeResponse;
import com.nxtlife.efkon.license.view.product.ProductDetailResponse;
import com.nxtlife.efkon.license.view.product.ProductFamilyResponse;
import com.nxtlife.efkon.license.view.project.ProjectResponse;
import com.nxtlife.efkon.license.view.project.product.ProjectProductRequest;
import com.nxtlife.efkon.license.view.project.product.ProjectProductResponse;
import com.nxtlife.efkon.license.view.version.VersionResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

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


    public void validate(ProjectProductRequest request) {
        if (!projectDao.existsByIdAndActive(request.getProjectId(), true)) {
            throw new ValidationException(String.format("Project (%s) not exist", mask(request.getProjectId())));
        }
        if (!productDetailDao.existsByIdAndActive(request.getProductDetailId(), true)) {
            throw new ValidationException(String.format("Product detail (%s) not exist", mask(request.getProductDetailId())));
        }

        if (request.getExpirationPeriodType() != null && request.getExpirationPeriodType().equals(ExpirationPeriodType.LIMITED.name()) && request.getExpirationMonthCount() == null) {
            throw new ValidationException("Expiration month count can't be null for limited expiration period");
        }

    }

    public ProjectProductResponse getProjectProductResponse(ProjectProduct projectProduct, Long projectId, Long productDetailId) {
        ProjectProductResponse response = ProjectProductResponse.get(projectProduct);
        response.setProjectResponse(ProjectResponse.get(projectDao.findById(projectId).get()));
        ProductDetail productDetail = productDetailDao.findById(productDetailId).get();
        ProductDetailResponse productDetailResponse = new ProductDetailResponse(productDetailId);
        productDetailResponse.setProductFamily(ProductFamilyResponse.get(productDetail.getProductFamily()));
        productDetailResponse.setProductCode(ProductCodeResponse.get(productDetail.getProductCode()));
        productDetailResponse.setVersion(VersionResponse.get(productDetail.getVersion()));
        response.setProductDetailResponse(productDetailResponse);
        return response;

    }


    /**
     * this method used to set end date according to start date and expiration month count
     * <p>
     * if addition of month of start date and expiration month count greater than 12 then year will be
     * incremented and month will be add result minus 12.
     *
     * @return String
     */

    public String setEndDate(String startDate, Integer expirationMonthCount) {

        int endMonth, endYear;
        LocalDate start = LocalDate.parse(startDate, DateTimeFormatter.ofPattern("yyyy-MM-dd"));
        endMonth = start.getMonthValue() + expirationMonthCount;
        endYear = endMonth > 12 ? start.getYear() + 1 : start.getYear();
        endMonth = endMonth > 12 ? endMonth - 12 : endMonth;
        String endDate = LocalDate.of(endYear, endMonth, start.getDayOfMonth()).toString();
        return endDate;


    }

    @Override
    @Secured(AuthorityUtils.PROJECT_PRODUCT_CREATE)
    public ProjectProductResponse save(ProjectProductRequest request) {
        validate(request);
        if (projectProductDao.existsByProjectIdAndProductDetailId(request.getProjectId(), request.getProductDetailId())) {
            throw new ValidationException(String.format("This product detail(%s) already assigned with project (%s)", mask(request.getProductDetailId()), mask(request.getProjectId())));
        }
        ProjectProduct projectProduct = request.toEntity();
        String endDate;
        if (request.getExpirationPeriodType().equals(ExpirationPeriodType.LIMITED.name())) {
            endDate = setEndDate(request.getStartDate(), request.getExpirationMonthCount());
            projectProduct.setEndDate(endDate);
        }
        projectProduct.setStatus(ProjectProductStatus.DRAFT);
        projectProduct.settProjectId(request.getProjectId());
        projectProduct.settProductDetailId(request.getProductDetailId());
        projectProductDao.save(projectProduct);
        return getProjectProductResponse(projectProduct, request.getProjectId(), request.getProductDetailId());
    }

    @Override
    @Secured(AuthorityUtils.PROJECT_PRODUCT_UPDATE)
    public ProjectProductResponse update(Long id, ProjectProductRequest request) {
        Long unmaskId = unmask(id);
        ProjectProduct projectProduct = projectProductDao.findByIdAndActive(unmaskId, true);
        if (projectProduct == null) {
            throw new NotFoundException(String.format("Project product (%s) not found", id));
        }
        validate(request);
        if (!projectProduct.getProject().getId().equals(request.getProjectId())) {
            throw new ValidationException(String.format("Project (%s) can't be update", mask(request.getProjectId())));
        }
        String endDate;
        if (request.getProductDetailId() != null) {
            projectProduct.settProductDetailId(request.getProductDetailId());
        }
        if (request.getLicenseCount() != null)
            projectProduct.setLicenseCount(request.getLicenseCount());
        if (request.getLicenseType() != null)
            projectProduct.setLicenseType(LicenseType.valueOf(request.getLicenseType()));
        if (request.getExpirationPeriodType() != null) {
            projectProduct.setExpirationPeriodType(ExpirationPeriodType.valueOf(request.getExpirationPeriodType()));
            if (request.getExpirationPeriodType().equals(ExpirationPeriodType.LIFETIME.name())) {

                projectProduct.setExpirationMonthCount(null);
                projectProduct.setEndDate(null);
            } else {
                projectProduct.setExpirationMonthCount(request.getExpirationMonthCount());
                endDate = setEndDate(projectProduct.getStartDate(), request.getExpirationMonthCount());
                projectProduct.setEndDate(endDate);
            }
        } else {
            if (projectProduct.getExpirationPeriodType().equals(ExpirationPeriodType.LIMITED) && request.getExpirationMonthCount() != null) {
                projectProduct.setExpirationMonthCount(request.getExpirationMonthCount());
                endDate = setEndDate(projectProduct.getStartDate(), request.getExpirationMonthCount());
                projectProduct.setEndDate(endDate);
            }
        }
        if (request.getStatus() != null) {
            projectProduct.setStatus(ProjectProductStatus.valueOf(request.getStatus()));
        }
        projectProductDao.save(projectProduct);

        return getProjectProductResponse(projectProduct, request.getProjectId(), request.getProductDetailId());
    }

    @Override
    @Secured(AuthorityUtils.PROJECT_PRODUCT_FETCH)
    public List<ProjectProductResponse> findAll() {

        List<ProjectProductResponse> projectProductResponseList = new ArrayList<>();
        projectProductDao.findAll().forEach(projectProduct -> {
            ProjectProductResponse response = ProjectProductResponse.get(projectProduct);
            response.setProjectResponse(ProjectResponse.get(projectProduct.getProject()));
            ProductDetail productDetail = productDetailDao.findById(projectProduct.getProductDetail().getId()).get();
            ProductDetailResponse productDetailResponse = new ProductDetailResponse(productDetail.getId());
            productDetailResponse.setProductFamily(ProductFamilyResponse.get(productDetail.getProductFamily()));
            productDetailResponse.setProductCode(ProductCodeResponse.get(productDetail.getProductCode()));
            productDetailResponse.setVersion(VersionResponse.get(productDetail.getVersion()));
            response.setProductDetailResponse(productDetailResponse);
            projectProductResponseList.add(response);

        });
        return projectProductResponseList;

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
        List<Long> projectProductCommentIds = projectProductCommentDao.findAllIdsByProjectProductIdAndActive(unmaskId, true);
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
