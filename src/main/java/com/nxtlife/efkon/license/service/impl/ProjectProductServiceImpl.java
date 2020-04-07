package com.nxtlife.efkon.license.service.impl;

import com.nxtlife.efkon.license.dao.jpa.ProductDetailJpaDao;
import com.nxtlife.efkon.license.dao.jpa.ProjectJpaDao;
import com.nxtlife.efkon.license.dao.jpa.ProjectProductJpaDao;
import com.nxtlife.efkon.license.entity.product.ProductDetail;
import com.nxtlife.efkon.license.entity.project.product.ProjectProduct;
import com.nxtlife.efkon.license.enums.ExpirationPeriodType;
import com.nxtlife.efkon.license.enums.LicenseType;
import com.nxtlife.efkon.license.enums.ProjectProductStatus;
import com.nxtlife.efkon.license.ex.NotFoundException;
import com.nxtlife.efkon.license.ex.ValidationException;
import com.nxtlife.efkon.license.service.BaseService;
import com.nxtlife.efkon.license.service.ProjectProductService;
import com.nxtlife.efkon.license.view.product.ProductCodeResponse;
import com.nxtlife.efkon.license.view.product.ProductDetailResponse;
import com.nxtlife.efkon.license.view.product.ProductFamilyResponse;
import com.nxtlife.efkon.license.view.project.ProjectResponse;
import com.nxtlife.efkon.license.view.project.product.ProjectProductRequest;
import com.nxtlife.efkon.license.view.project.product.ProjectProductResponse;
import com.nxtlife.efkon.license.view.version.VersionResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
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

    public List<ProjectProduct> getAllProjectProduct() {

        return projectProductDao.findAll();

    }

}
