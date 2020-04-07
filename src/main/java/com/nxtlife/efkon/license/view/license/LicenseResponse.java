package com.nxtlife.efkon.license.view.license;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.nxtlife.efkon.license.entity.license.License;
import com.nxtlife.efkon.license.view.Response;
import com.nxtlife.efkon.license.view.project.product.ProjectProductResponse;

import io.swagger.v3.oas.annotations.media.Schema;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
public class LicenseResponse implements Response {

	@Schema(description = "Id of the license", example = "1")
	private Long id;

	@Schema(description = "Unique access Id of the local system", example = "1", required = true)
	private Long uniqueAccessId;

	@Schema(description = "Name of license", example = "location name", required = true)
	private String name;

	private ProjectProductResponse projectProductResponse;

	public LicenseResponse(Long id, Long uniqueAccessId, String name) {
		super();
		this.id = id;
		this.uniqueAccessId = uniqueAccessId;
		this.name = name;
	}

	public Long getId() {
		return mask(id);
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getUniqueAccessId() {
		return uniqueAccessId;
	}

	public void setUniqueAccessId(Long uniqueAccessId) {
		this.uniqueAccessId = uniqueAccessId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public ProjectProductResponse getProjectProductResponse() {
		return projectProductResponse;
	}

	public void setProjectProductResponse(ProjectProductResponse projectProductResponse) {
		this.projectProductResponse = projectProductResponse;
	}

	public static LicenseResponse get(License license) {
		if (license != null) {
			LicenseResponse response = new LicenseResponse(license.getId(), license.getAccessId(), license.getName());
			return response;
		}
		return null;
	}
}
