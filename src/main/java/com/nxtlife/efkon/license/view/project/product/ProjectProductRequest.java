package com.nxtlife.efkon.license.view.project.product;

import com.nxtlife.efkon.license.enums.ExpirationPeriodType;
import com.nxtlife.efkon.license.enums.LicenseType;
import com.nxtlife.efkon.license.enums.ProjectProductStatus;
import com.nxtlife.efkon.license.view.Request;
import io.swagger.v3.oas.annotations.media.Schema;

import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

public class ProjectProductRequest implements Request {

    @Schema(description = " Id of the project",example = "1",required = true)
    @NotNull(message = "project Id can't be null")
    private Long projectId;

    @Schema(description = " Id of the product detail",example = "1",required = true)
    @NotNull(message = "project detail Id can't be null")
    private Long productDetailId;

    @Schema(description = "No of license",example = "4",required = true)
    @NotNull(message = "License count can't be null")
    private Integer licenseCount;

    @Schema(description = "Type of license",example = "Demo",required = true)
    @NotNull(message = "License type can't be null")
    private LicenseType licenseType;

    @Schema(description = "Type of expiration period",example = "Demo",required = true)
    @NotNull(message = "Expiration period type can't be null")
    private ExpirationPeriodType expirationPeriodType;
    private Integer expirationMonthCount;
    private LocalDateTime startDate;
    private ProjectProductStatus status;
}
