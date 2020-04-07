package com.nxtlife.efkon.license.view.project.product;

import com.nxtlife.efkon.license.entity.project.product.ProjectProduct;
import com.nxtlife.efkon.license.enums.ExpirationPeriodType;
import com.nxtlife.efkon.license.enums.LicenseType;
import com.nxtlife.efkon.license.enums.ProjectProductStatus;
import com.nxtlife.efkon.license.view.Request;
import io.swagger.v3.oas.annotations.media.Schema;

import javax.validation.constraints.Max;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

public class ProjectProductRequest implements Request {

    @Schema(description = " Id of the project", example = "1", required = true)
    @NotNull(message = "project Id can't be null")
    private Long projectId;

    @Schema(description = " Id of the product detail", example = "1", required = true)
    @NotNull(message = "project detail Id can't be null")
    private Long productDetailId;

    @Schema(description = "No of license", example = "4", required = true)
    @NotNull(message = "License count can't be null")
    private Integer licenseCount;

    @Schema(description = "Type of license", example = "Demo", required = true)
    @NotNull(message = "License type can't be null")
    private String licenseType;

    @Schema(description = "Type of expiration period", example = "Demo", required = true)
    @NotNull(message = "Expiration period type can't be null")
    private String expirationPeriodType;

    @Schema(description = "Month count of expiration", example = "3")
    @Max(value = 12,message = "expiration month count can't be more than 12 month")
    private Integer expirationMonthCount;

    @Schema(description = "Start date for limited license expiry", example = "2020-04-06")
    @NotEmpty(message = "start date can't be null")
    private String startDate;

    @Schema(description = "status of the project product", example = "Approved")
    private String status;

    public ProjectProduct toEntity() {
        ProjectProduct projectProduct = new ProjectProduct();
        projectProduct.setLicenseCount(licenseCount);
        projectProduct.setLicenseType(LicenseType.valueOf(licenseType));
        if (expirationMonthCount != null)
            projectProduct.setExpirationMonthCount(expirationMonthCount);
        projectProduct.setExpirationPeriodType(ExpirationPeriodType.valueOf(expirationPeriodType));
        projectProduct.setStartDate(startDate);
        return projectProduct;

    }

    public Long getProjectId() {
        return unmask(projectId);
    }

    public Long getProductDetailId() {
        return unmask(productDetailId);
    }

    public Integer getLicenseCount() {
        return licenseCount;
    }

    public String getLicenseType() {
        return licenseType;
    }

    public String getExpirationPeriodType() {
        return expirationPeriodType;
    }

    public Integer getExpirationMonthCount() {
        return expirationMonthCount;
    }

    public String getStartDate() {
        return startDate;
    }

    public String getStatus() {
        return status;
    }
}
