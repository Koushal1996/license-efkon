package com.nxtlife.efkon.license.view.version;

import javax.validation.constraints.NotEmpty;

import com.nxtlife.efkon.license.entity.version.Version;
import com.nxtlife.efkon.license.view.Request;

import io.swagger.v3.oas.annotations.media.Schema;

public class VersionRequest implements Request {

	@Schema(description = "Id of the version")
	private Long id;

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
		version.setId(this.getId());
		return version;
	}

	public Long getId() {
		return unmask(id);
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getVersion() {
		return version;
	}

	public void setVersion(String version) {
		this.version = version;
	}

}
