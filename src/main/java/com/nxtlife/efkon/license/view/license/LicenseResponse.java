package com.nxtlife.efkon.license.view.license;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.nxtlife.efkon.license.entity.license.License;
import com.nxtlife.efkon.license.view.Response;
import com.nxtlife.efkon.license.view.project.product.ProjectProductResponse;

import io.swagger.v3.oas.annotations.media.Schema;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
public class LicenseResponse implements Response {

	@Schema(description = "Id of the license", example = "1")
	private Long id;

	private String code;

	@Schema(description = "Unique access Id of the local system", example = "1", required = true)
	private String accessId;

	private String generatedKey;

	@Schema(description = "Name of license", example = "location name", required = true)
	private String name;

	private Long projectProductId;

	private ProjectProductResponse projectProductResponse;

	public LicenseResponse get(License license) {
		if (license != null) {
			return new LicenseResponse(license.getId(), license.getName(), license.getCode(), license.getAccessId(),
					license.getGeneratedKey(), license.getProjectProduct().getId());
		}
		return null;
	}

	public LicenseResponse(Long id, String name, String code, String accessId, String generatedKey,
			Long projectProductId) {
		super();
		this.id = id;
		this.accessId = accessId;
		this.code = code;
		this.generatedKey = generatedKey;
		this.name = name;
		this.projectProductId = projectProductId;
	}

	public Long getId() {
		return mask(id);
	}

	public void setId(Long id) {
		this.id = id;
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

	public void setProjectProductResponse(ProjectProductResponse projectProduct) {
		this.projectProductResponse = projectProduct;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getAccessId() {
		return accessId;
	}

	public void setAccessId(String accessId) {
		this.accessId = accessId;
	}

	public String getGeneratedKey() {
		return generatedKey;
	}

	public void setGeneratedKey(String generatedKey) {
		this.generatedKey = generatedKey;
	}

	public Long getProjectProductId() {
		return mask(projectProductId);
	}

	public void setProjectProductId(Long projectProductId) {
		this.projectProductId = projectProductId;
	}

	public List<String> columnValues() {
		List<String> columnValues = new ArrayList<>();
		columnValues.add(accessId == null ? "NA" : accessId);
		columnValues.add(generatedKey == null ? "NA" : generatedKey);
		return columnValues;

	}

	public static List<String> licenseColumnHeaders() {
		List<String> columnHeaders = Arrays.asList("Access Id", "Generated Key", "Product Code", "Product Family",
				"Version", "Remark");
		return columnHeaders;
	}

	public static float[] columnWidth() {
		return new float[] { 1.25f, 2.75f, .75f, .75f, .75f, .75f };
	}
}
