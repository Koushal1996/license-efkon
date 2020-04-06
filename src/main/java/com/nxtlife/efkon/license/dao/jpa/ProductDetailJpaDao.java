package com.nxtlife.efkon.license.dao.jpa;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.nxtlife.efkon.license.entity.product.ProductDetail;
import com.nxtlife.efkon.license.view.product.ProductDetailResponse;

@Repository
public interface ProductDetailJpaDao extends JpaRepository<ProductDetail, Long> {

	public ProductDetailResponse findResponseById(Long id);

	public List<ProductDetail> findAllByActive(Boolean active);

	@Modifying
	@Query(value = "update ProductCode set active = false, modified_by =?2, modified_at =?3 where id =?1")
	public int deleteByProductFamilyId(Long id, Long userId, Date date);

	public Boolean existsByProductFamilyIdAndActive(Long productFamilyId, Boolean active);

	public Boolean existsByProductFamilyIdAndProductCodeIdAndVersionIdAndActive(Long productFamilyId,Long productCodeId,Long versionId,Boolean active);

	public Optional<ProductDetail> findById(Long id);
	
	@Modifying
    @Query("update ProductDetail set product_family_id=?1, product_code_id=?2, version_id=?3, modified_by =?5, modified_at =?6 where id = ?4 ")
    public int updateProductDetailById(Long productFamilyId, Long productCodeId, Long versionId, Long id, Long userId, Date date);
	
	@Modifying
    @Query("update ProductDetail set product_code_id=?1, version_id=?2, modified_by =?4, modified_at =?5 where id = ?3 ")
    public int updateProductCodeIdAndVersionIdById(Long productCodeId, Long versionId, Long id, Long userId, Date date);
	
	@Modifying
    @Query("update ProductDetail set version_id=?1, modified_by =?3, modified_at =?4 where id = ?2 ")
    public int updateVersionIdById(Long versionId, Long id, Long userId, Date date);
	
	
}
