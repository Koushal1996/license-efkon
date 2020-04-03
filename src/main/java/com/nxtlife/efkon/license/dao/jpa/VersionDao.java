package com.nxtlife.efkon.license.dao.jpa;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nxtlife.efkon.license.entity.version.Version;
import com.nxtlife.efkon.license.view.version.VersionResponse;

@Repository
public interface VersionDao extends JpaRepository<Version, Long> {

	public List<VersionResponse> findByActive(Boolean active);

	public VersionResponse findResponseById(Long id);
	
	public Boolean existsByVersion(String version);

}
