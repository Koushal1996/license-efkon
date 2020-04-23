package com.nxtlife.efkon.license.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nxtlife.efkon.license.dao.jpa.LicenseJpaDao;
import com.nxtlife.efkon.license.service.BaseService;
import com.nxtlife.efkon.license.service.LicenseService;
import com.nxtlife.efkon.license.service.ProjectProductService;
import com.nxtlife.efkon.license.util.AuthorityUtils;
import com.nxtlife.efkon.license.view.license.LicenseRequest;
import com.nxtlife.efkon.license.view.license.LicenseResponse;

@Service("licenseServiceImpl")
@Transactional
public class LicenseServiceImpl extends BaseService implements LicenseService {

	@Autowired
	private ProjectProductService projectProductService;

	@Autowired
	private LicenseJpaDao licenseDao;

	@Override
	@Secured(AuthorityUtils.LICENSE_FETCH)
	public LicenseResponse findByLicenseId(Long licenseId) {
		Long unmaskId = unmask(licenseId);
		LicenseResponse license = licenseDao.findResponseById(unmaskId);
		license.setProjectProduct(projectProductService.findById(license.getProjectProductId()));
		return license;
	}

	@Override
	public LicenseResponse update(Long id, LicenseRequest request) {
		return null;
	}

}
