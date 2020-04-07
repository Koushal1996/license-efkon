package com.nxtlife.efkon.license.service;

import java.util.List;

import com.nxtlife.efkon.license.view.license.LicenseRequest;
import com.nxtlife.efkon.license.view.license.LicenseResponse;

public interface LicenseService {

	public LicenseResponse save(LicenseRequest request);

	public LicenseResponse update(Long id, LicenseRequest request);

	public List<LicenseResponse> findAll();
}
