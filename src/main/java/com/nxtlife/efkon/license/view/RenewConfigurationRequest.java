package com.nxtlife.efkon.license.view;

import javax.validation.constraints.NotNull;

public class RenewConfigurationRequest {

	@NotNull(message = "Show before days can't be null")
	private Integer showBeforeDays;

	@NotNull(message = "Start date change can't be null")
	private Boolean startDateChange;

	public Integer getShowBeforeDays() {
		return showBeforeDays;
	}

	public Boolean getStartDateChange() {
		return startDateChange;
	}

}
