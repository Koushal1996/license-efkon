package com.nxtlife.efkon.license.service;

import java.util.List;

import com.nxtlife.efkon.license.view.version.VersionRequest;
import com.nxtlife.efkon.license.view.version.VersionResponse;

public interface VersionService {

	public VersionResponse save(VersionRequest request);

	public List<VersionResponse> findAll();

}
