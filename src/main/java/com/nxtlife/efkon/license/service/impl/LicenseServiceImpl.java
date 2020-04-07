package com.nxtlife.efkon.license.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.nxtlife.efkon.license.dao.jpa.ProjectProductJpaDao;
import com.nxtlife.efkon.license.ex.ValidationException;
import com.nxtlife.efkon.license.service.BaseService;
import com.nxtlife.efkon.license.service.LicenseService;
import com.nxtlife.efkon.license.view.license.LicenseRequest;
import com.nxtlife.efkon.license.view.license.LicenseResponse;

public class LicenseServiceImpl extends BaseService implements LicenseService {

	@Autowired
	private ProjectProductJpaDao projectProductDao;

	public void validate(LicenseRequest request) {
		if (!projectProductDao.existsByIdAndActive(request.getProjectProductId(), true)) {
			throw new ValidationException(
					String.format("Project product (%s) not exist", mask(request.getProjectProductId())));
		}

	}

	@Override
	public LicenseResponse save(LicenseRequest request) {
		return null;
	}

	@Override
	public List<LicenseResponse> findAll() {
		return null;
	}

	@Override
	public LicenseResponse update(Long id, LicenseRequest request) {
		return null;
	}

}
