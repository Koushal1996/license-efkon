package com.nxtlife.efkon.license.dao.jpa;

import com.nxtlife.efkon.license.entity.product.ProductFamily;
import com.nxtlife.efkon.license.view.product.ProductFamilyResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface ProductFamilyJpaDao extends JpaRepository<ProductFamily, Long>{

    public Boolean existsByName(String name);

    public ProductFamilyResponse findResponseById(Long id);

}
