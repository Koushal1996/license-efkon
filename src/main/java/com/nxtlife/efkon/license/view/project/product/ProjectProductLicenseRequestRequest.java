package com.nxtlife.efkon.license.view.project.product;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

import com.nxtlife.efkon.license.entity.project.product.ProjectProductLicenseRequest;
import com.nxtlife.efkon.license.view.Request;

import io.swagger.v3.oas.annotations.media.Schema;

public class ProjectProductLicenseRequestRequest implements Request {

	@Schema(description = "No of licenses", example = "4", required = true)
	@NotNull(message = "License count can't be null")
	@Min(message = "license count can't be less than 1", value = 1)
	private Integer licenseCount;

	@Schema(description = "Id of the projectProduct", example = "1", required = true)
	@NotNull(message = "project product Id can't be null")
	private Long projectProductId;

	public ProjectProductLicenseRequest toEntity() {
		ProjectProductLicenseRequest pplr = new ProjectProductLicenseRequest();
		pplr.setLicenseCount(licenseCount);
		pplr.settProjectProductId(unmask(projectProductId));
		return pplr;

	}

	public Integer getLicenseCount() {
		return licenseCount;
	}

	public void setLicenseCount(Integer licenseCount) {
		this.licenseCount = licenseCount;
	}

	public Long getProjectProductId() {
		return projectProductId;
	}

	public void setProjectProductId(Long projectProductId) {
		this.projectProductId = projectProductId;
	}

}
