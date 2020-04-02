package com.nxtlife.efkon.license.dao.jpa;

import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.nxtlife.efkon.license.entity.product.ProductCode;
import com.nxtlife.efkon.license.view.product.ProductCodeResponse;

public interface ProductCodeJpaDao extends JpaRepository<ProductCode, Long> {

	public List<ProductCodeResponse> findByProductFamilyId(Long productFamilyId);

	@Query("select name from ProductCode")
	public List<String> findAllNames();

	@Query("select name from ProductCode where product_family_id = ?1")
	public Set<String> findAllNamesByProductFamilyId(Long ProductFamilyId);

	public int deleteByName(String name);
}
