package com.nxtlife.efkon.license.view.project.product;

import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.nxtlife.efkon.license.entity.project.product.ProjectProductLicenseRequest;
import com.nxtlife.efkon.license.enums.LicenseRequestStatus;
import com.nxtlife.efkon.license.view.Response;

import io.swagger.v3.oas.annotations.media.Schema;

public class ProjectProductLicenseRequestResponse implements Response {

	@Schema(description = " Id of the project product", example = "1")
	private Long id;

	private String createdAt;

	@JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss.SSSZ")
	private Date modifiedAt;

	@Schema(description = "No of license", example = "4")
	private Integer licenseCount;

	@Schema(description = "status of the license request", example = "Approved")
	private LicenseRequestStatus status;

	@JsonIgnore
	private Long createdById;

	private Long projectProductId;

	private ProjectProductResponse projectProductResponse;

	private List<ProjectProductCommentResponse> comments;

	public ProjectProductLicenseRequestResponse(Long id, Integer licenseCount, String createdAt,
			LicenseRequestStatus status, Date modifiedAt, Long createdById, Long projectProductId) {
		super();
		this.id = id;
		this.licenseCount = licenseCount;
		this.createdAt = createdAt;
		this.status = status;
		this.modifiedAt = modifiedAt;
		this.createdById = createdById;
		this.projectProductId = projectProductId;
	}

	public Long getId() {
		return mask(id);
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(String createdAt) {
		this.createdAt = createdAt;
	}

	public Date getModifiedAt() {
		return modifiedAt;
	}

	public void setModifiedAt(Date modifiedAt) {
		this.modifiedAt = modifiedAt;
	}

	public Integer getLicenseCount() {
		return licenseCount;
	}

	public void setLicenseCount(Integer licenseCount) {
		this.licenseCount = licenseCount;
	}

	public Long getCreatedById() {
		return createdById;
	}

	public void setCreatedById(Long createdById) {
		this.createdById = createdById;
	}

	public ProjectProductResponse getProjectProductResponse() {
		return projectProductResponse;
	}

	public void setProjectProductResponse(ProjectProductResponse projectProductResponse) {
		this.projectProductResponse = projectProductResponse;
	}

	public LicenseRequestStatus getStatus() {
		return status;
	}

	public void setStatus(LicenseRequestStatus status) {
		this.status = status;
	}

	public Long getProjectProductId() {
		return mask(projectProductId);
	}

	public void setProjectProductId(Long projectProductId) {
		this.projectProductId = projectProductId;
	}

	public List<ProjectProductCommentResponse> getComments() {
		return comments;
	}

	public void setComments(List<ProjectProductCommentResponse> comments) {
		this.comments = comments;
	}

	public static ProjectProductLicenseRequestResponse get(ProjectProductLicenseRequest pplr) {
		if (pplr != null) {
			ProjectProductLicenseRequestResponse response = new ProjectProductLicenseRequestResponse(pplr.getId(),
					pplr.getLicenseCount(), pplr.getCreatedAt(), pplr.getStatus(), pplr.getModifiedAt(), null, null);
			return response;
		}
		return null;
	}

}
