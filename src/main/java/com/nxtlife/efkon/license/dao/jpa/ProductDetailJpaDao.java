package com.nxtlife.efkon.license.dao.jpa;

import com.nxtlife.efkon.license.entity.product.ProductDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;


@Repository
public interface ProductDetailJpaDao extends JpaRepository<ProductDetail, Long>{

    @Modifying
    @Query(value = "update ProductCode set active = false, modified_by =?2, modified_at =?3 where id =?1")
    public int deleteByProductFamilyId(Long id, Long userId, Date date);

    public Boolean existsByProductFamilyIdAndActive(Long productFamilyId,Boolean active);


}
