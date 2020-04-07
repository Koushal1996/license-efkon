package com.nxtlife.efkon.license.dao.jpa;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nxtlife.efkon.license.entity.license.License;

@Repository
public interface LicenseJpaDao extends JpaRepository<License, Long> {

}
