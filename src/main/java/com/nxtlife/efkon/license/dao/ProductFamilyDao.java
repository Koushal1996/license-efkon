package com.nxtlife.efkon.license.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nxtlife.efkon.license.entity.ProductFamily;

@Repository
public interface ProductFamilyDao extends JpaRepository<ProductFamily, Long>{

}
