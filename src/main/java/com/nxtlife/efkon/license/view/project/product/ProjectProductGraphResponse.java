package com.nxtlife.efkon.license.view.project.product;

import com.nxtlife.efkon.license.enums.ProjectProductStatus;

import io.swagger.v3.oas.annotations.media.Schema;

public class ProjectProductGraphResponse {

	@Schema(description = "Status of product", example = "APPROVED")
	private String status;

	@Schema(description = "No of product count by status", example = "4")
	private long count;

	public ProjectProductGraphResponse() {
	}

	public ProjectProductGraphResponse(ProjectProductStatus status, long count) {
		this.status = status.toString();
		this.count = count;
	}

	public ProjectProductGraphResponse(String status, long count) {
		this.status = status;
		this.count = count;
	}

	public ProjectProductGraphResponse(long count) {
		this.count = count;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public long getCount() {
		return count;
	}

	public void setCount(long count) {
		this.count = count;
	}

}
