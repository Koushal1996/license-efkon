package com.nxtlife.efkon.license.view.version;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.nxtlife.efkon.license.entity.version.Version;
import com.nxtlife.efkon.license.view.Response;

import io.swagger.v3.oas.annotations.media.Schema;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
public class VersionResponse implements Response {

	@Schema(description = "Id of the version")
	private Long id;

	@Schema(description = "Version of the product")
	private String version;

	public VersionResponse(Long id, String version) {
		super();
		this.id = id;
		this.version = version;
	}

	public Long getId() {
		return mask(id);
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

	public static VersionResponse get(Version version) {
		if (version != null) {
			VersionResponse response = new VersionResponse(version.getId(), version.getVersion());
			return response;
		}
		return null;

	}

}
