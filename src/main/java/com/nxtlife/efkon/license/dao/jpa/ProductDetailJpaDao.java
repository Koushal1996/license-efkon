package com.nxtlife.efkon.license.dao.jpa;

import com.nxtlife.efkon.license.entity.product.ProductDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface ProductDetailJpaDao extends JpaRepository<ProductDetail, Long>{

}
