package com.nxtlife.efkon.license.view.version;

import com.nxtlife.efkon.license.entity.version.Version;

import io.swagger.v3.oas.annotations.media.Schema;

public class VersionResponse {

	@Schema(description = "Version of the product")
	private String version;

	public VersionResponse(Version version) {
		this.version = version.getVersion();
	}

	public String getVersion() {
		return version;
	}

	public void setVersion(String version) {
		this.version = version;
	}

}
