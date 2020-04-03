package com.nxtlife.efkon.license.view.project.product;

import com.nxtlife.efkon.license.enums.ExpirationPeriodType;
import com.nxtlife.efkon.license.enums.LicenseType;
import com.nxtlife.efkon.license.enums.ProjectProductStatus;
import com.nxtlife.efkon.license.view.Request;
import io.swagger.v3.oas.annotations.media.Schema;

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
    private LicenseType licenseType;

    @Schema(description = "Type of expiration period", example = "Demo", required = true)
    @NotNull(message = "Expiration period type can't be null")
    private ExpirationPeriodType expirationPeriodType;

    @Schema(description = "Month count of expiration", example = "3")
    private Integer expirationMonthCount;

    @Schema(description = "Start date for limited license expiry", example = "2020-04-02T13:56:52.837+0530")
    private String startDate;

    @Schema(description = "status of the project product", example = "Approved")
    private ProjectProductStatus status;

    public Long getProjectId() {
        return unmask(projectId);
    }

    public Long getProductDetailId() {
        return unmask(productDetailId);
    }

    public Integer getLicenseCount() {
        return licenseCount;
    }

    public LicenseType getLicenseType() {
        return licenseType;
    }

    public ExpirationPeriodType getExpirationPeriodType() {
        return expirationPeriodType;
    }

    public Integer getExpirationMonthCount() {
        return expirationMonthCount;
    }

    public String getStartDate() {
        return startDate;
    }

    public ProjectProductStatus getStatus() {
        return status;
    }
}
