package com.nxtlife.efkon.license.dao.jpa;

import com.nxtlife.efkon.license.entity.product.ProductCode;
import com.nxtlife.efkon.license.view.product.ProductCodeResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductCodeJpaDao extends JpaRepository<ProductCode, Long> {

    public List<ProductCodeResponse> findByProductFamilyId(Long productFamilyId);

    @Query("select name from ProductCode")
    public List<String> findAllNames();
}
