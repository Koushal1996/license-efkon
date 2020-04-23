package com.nxtlife.efkon.license.service;

import com.nxtlife.efkon.license.view.license.LicenseRequest;
import com.nxtlife.efkon.license.view.license.LicenseResponse;

public interface LicenseService {

	public LicenseResponse update(Long id, LicenseRequest request);

	public LicenseResponse findByLicenseId(Long licenseId);
}
