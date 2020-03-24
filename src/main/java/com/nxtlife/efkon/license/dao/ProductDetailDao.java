package com.nxtlife.efkon.license.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nxtlife.efkon.license.entity.ProductDetail;

@Repository
public interface ProductDetailDao extends JpaRepository<ProductDetail, Long>{

}
