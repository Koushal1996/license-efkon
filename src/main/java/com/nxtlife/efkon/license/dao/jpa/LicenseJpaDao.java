package com.nxtlife.efkon.license.dao.jpa;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nxtlife.efkon.license.entity.license.License;
import com.nxtlife.efkon.license.view.license.LicenseResponse;

@Repository
public interface LicenseJpaDao extends JpaRepository<License, Long> {

	public Boolean existsByProjectProductIdAndActive(Long projectProductId, Boolean active);

	public Boolean existsByProjectProductIdAndCodeAndAccessIdAndActive(Long projectProductId, String code,
			Long accessId, Boolean active);

	public List<LicenseResponse> findByProjectProductIdAndActive(Long projectProductId, Boolean active);

	public LicenseResponse findResponseById(Long id);

	public List<License> findByActive(Boolean active);
}
