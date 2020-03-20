package com.nxtlife.efkon.license.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nxtlife.efkon.license.entity.ProductCode;

@Repository
public interface ProductCodeRepo extends JpaRepository<ProductCode, Long>{

}
