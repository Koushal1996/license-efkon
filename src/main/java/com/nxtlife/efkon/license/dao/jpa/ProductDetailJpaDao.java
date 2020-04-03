package com.nxtlife.efkon.license.dao.jpa;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nxtlife.efkon.license.entity.product.ProductDetail;
import com.nxtlife.efkon.license.view.product.ProductDetailResponse;

@Repository
public interface ProductDetailJpaDao extends JpaRepository<ProductDetail, Long> {

	public ProductDetailResponse findResponseById(Long id);

	public List<ProductDetailResponse> findByActive(Boolean active);

}
