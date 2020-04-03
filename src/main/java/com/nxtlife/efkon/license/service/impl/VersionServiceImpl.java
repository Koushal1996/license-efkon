package com.nxtlife.efkon.license.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nxtlife.efkon.license.dao.jpa.VersionDao;
import com.nxtlife.efkon.license.entity.version.Version;
import com.nxtlife.efkon.license.ex.ValidationException;
import com.nxtlife.efkon.license.service.VersionService;
import com.nxtlife.efkon.license.view.version.VersionRequest;
import com.nxtlife.efkon.license.view.version.VersionResponse;

@Service("versionServiceImpl")
@Transactional
public class VersionServiceImpl implements VersionService {

	@Autowired
	public VersionDao versionDao;

	public void validate(VersionRequest request) {
		if (versionDao.existsByVersion(request.getVersion())) {
			throw new ValidationException(String.format("Version (%s) already exist", request.getVersion()));
		}
	}

	@Override
	public VersionResponse save(VersionRequest request) {
		validate(request);
		Version version = request.toEntity();
		versionDao.save(version);
		VersionResponse response = versionDao.findResponseById(version.getId());
		return response;
	}

	@Override
	public List<VersionResponse> findAll() {
		List<VersionResponse> responses = versionDao.findByActive(true);
		return responses;
	}
}
