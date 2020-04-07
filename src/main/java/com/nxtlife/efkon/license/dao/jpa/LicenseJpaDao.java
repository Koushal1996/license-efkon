package com.nxtlife.efkon.license.dao.jpa;

import com.nxtlife.efkon.license.entity.license.License;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LicenseJpaDao extends JpaRepository<License,Long> {

    public Boolean existsByProjectProductIdAndActive(Long projectProductId,Boolean active);
}
