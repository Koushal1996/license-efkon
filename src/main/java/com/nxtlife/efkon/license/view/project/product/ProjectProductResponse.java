package com.nxtlife.efkon.license.view.project.product;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.nxtlife.efkon.license.entity.project.product.ProjectProduct;
import com.nxtlife.efkon.license.enums.ExpirationPeriodType;
import com.nxtlife.efkon.license.enums.LicenseType;
import com.nxtlife.efkon.license.enums.ProjectProductStatus;
import com.nxtlife.efkon.license.view.Response;
import com.nxtlife.efkon.license.view.product.ProductDetailResponse;
import com.nxtlife.efkon.license.view.project.ProjectResponse;
import io.swagger.v3.oas.annotations.media.Schema;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
public class ProjectProductResponse implements Response {

    @Schema(description = " Id of the project product", example = "1")
    private Long id;

    private ProjectResponse projectResponse;

    private ProductDetailResponse productDetailResponse;

    @Schema(description = "No of license", example = "4")
    private Integer licenseCount;

    @Schema(description = "Type of license", example = "Demo")
    private LicenseType licenseType;

    @Schema(description = "Type of expiration period", example = "Demo")
    private ExpirationPeriodType expirationPeriodType;

    @Schema(description = "Month count of expiration", example = "3")
    private Integer expirationMonthCount;

    @Schema(description = "Start date for limited license expiry", example = "2020-04-02T13:56:52.837+0530")
    private String startDate;

    @Schema(description = "End date for limited license expiry", example = "2020-04-02T13:56:52.837+0530")
    private String endDate;

    @Schema(description = "status of the project product", example = "Approved")
    private ProjectProductStatus status;

    public ProjectProductResponse(Long id, Integer licenseCount, LicenseType licenseType, ExpirationPeriodType expirationPeriodType,
                                  Integer expirationMonthCount, String startDate, String endDate, ProjectProductStatus status) {
        super();
        this.id = id;
        this.licenseCount = licenseCount;
        this.licenseType = licenseType;
        this.expirationPeriodType = expirationPeriodType;
        this.expirationMonthCount = expirationMonthCount;
        this.startDate = startDate;
        this.endDate = endDate;
        this.status = status;
    }

    public Long getId() {
        return mask(id);
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getLicenseCount() {
        return licenseCount;
    }

    public void setLicenseCount(Integer licenseCount) {
        this.licenseCount = licenseCount;
    }

    public LicenseType getLicenseType() {
        return licenseType;
    }

    public void setLicenseType(LicenseType licenseType) {
        this.licenseType = licenseType;
    }

    public ExpirationPeriodType getExpirationPeriodType() {
        return expirationPeriodType;
    }

    public void setExpirationPeriodType(ExpirationPeriodType expirationPeriodType) {
        this.expirationPeriodType = expirationPeriodType;
    }

    public Integer getExpirationMonthCount() {
        return expirationMonthCount;
    }

    public void setExpirationMonthCount(Integer expirationMonthCount) {
        this.expirationMonthCount = expirationMonthCount;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public ProjectProductStatus getStatus() {
        return status;
    }

    public void setStatus(ProjectProductStatus status) {
        this.status = status;
    }

    public ProjectResponse getProjectResponse() {
        return projectResponse;
    }

    public void setProjectResponse(ProjectResponse projectResponse) {
        this.projectResponse = projectResponse;
    }

    public ProductDetailResponse getProductDetailResponse() {
        return productDetailResponse;
    }

    public void setProductDetailResponse(ProductDetailResponse productDetailResponse) {
        this.productDetailResponse = productDetailResponse;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public static ProjectProductResponse get(ProjectProduct projectProduct) {
        if (projectProduct != null) {
            ProjectProductResponse response = new ProjectProductResponse(projectProduct.getId(), projectProduct.getLicenseCount(), projectProduct.getLicenseType(),
                    projectProduct.getExpirationPeriodType(), projectProduct.getExpirationMonthCount(), projectProduct.getStartDate(), projectProduct.getEndDate(), projectProduct.getStatus());
            return response;
        }
        return null;
    }

}
