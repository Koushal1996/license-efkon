package com.nxtlife.efkon.license.view.version;

import javax.validation.constraints.NotEmpty;

import com.nxtlife.efkon.license.entity.version.Version;

import io.swagger.v3.oas.annotations.media.Schema;

public class VersionRequest {

	@Schema(description = "version of the product code")
	@NotEmpty(message = "version can't be empty")
	private String version;

	public VersionRequest(String version) {
		super();
		this.version = version;
	}
	
	public Version toEntity() {
		Version version = new Version();
		version.setVersion(this.getVersion());
		return version;
	}

	public String getVersion() {
		return version;
	}

	public void setVersion(String version) {
		this.version = version;
	}

}
