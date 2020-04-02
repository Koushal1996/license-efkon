package com.nxtlife.efkon.license.dao.jpa;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.nxtlife.efkon.license.entity.product.ProductFamily;
import com.nxtlife.efkon.license.view.product.ProductFamilyResponse;

@Repository
public interface ProductFamilyJpaDao extends JpaRepository<ProductFamily, Long> {

	public Boolean existsByName(String name);

	public ProductFamilyResponse findResponseById(Long id);

	@Query(value = "select id from ProductFamily where  name = ?1")
	public Long findIdByName(String name);

}
