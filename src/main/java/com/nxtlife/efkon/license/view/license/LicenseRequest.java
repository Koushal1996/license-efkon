package com.nxtlife.efkon.license.view.license;

import javax.validation.constraints.NotNull;

import com.nxtlife.efkon.license.entity.license.License;
import com.nxtlife.efkon.license.view.Request;

import io.swagger.v3.oas.annotations.media.Schema;

public class LicenseRequest implements Request {

	@Schema(description = "Id of the project product", example = "1", required = true)
	@NotNull(message = "project product Id can't be null")
	private Long projectProductId;

	@Schema(description = "Unique access Id of the local system", example = "1", required = true)
	@NotNull(message = "Unique access Id can't be null")
	private Long uniqueAccessId;

	@Schema(description = "Name of license", example = "location name", required = true)
	@NotNull(message = "Name type can't be null")
	private String name;

	@Schema(description = "Status of the license", example = "Renewed")
	private String status;

	public License toEntity() {
		License license = new License();
		license.setAccessId(uniqueAccessId);
		license.setName(name);
		return license;
	}

	public Long getProjectProductId() {
		return unmask(projectProductId);
	}

	public void setProjectProductId(Long projectProductId) {
		this.projectProductId = projectProductId;
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

	public String getStatus() {
		return status;
	}

	public void setLicenseStatus(String status) {
		this.status = status;
	}

}
