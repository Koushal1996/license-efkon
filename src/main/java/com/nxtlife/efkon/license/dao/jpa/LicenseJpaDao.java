package com.nxtlife.efkon.license.dao.jpa;

import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.nxtlife.efkon.license.entity.license.License;
import com.nxtlife.efkon.license.enums.LicenseStatus;
import com.nxtlife.efkon.license.view.license.LicenseResponse;

@Repository
public interface LicenseJpaDao extends JpaRepository<License, Long> {

	public Boolean existsByProjectProductIdAndActive(Long projectProductId, Boolean active);

	public Boolean existsByProjectProductIdAndCodeAndAccessIdAndActive(Long projectProductId, String code,
			Long accessId, Boolean active);

	public List<LicenseResponse> findByProjectProductIdAndActive(Long projectProductId, Boolean active);

	public LicenseResponse findResponseByIdAndActive(Long id, Boolean active);

	public List<LicenseResponse> findByActive(Boolean active);

	public List<LicenseResponse> findAllByActive(Boolean active);

	public LicenseResponse findByIdAndActive(Long unmaskId, Boolean active);

	public List<LicenseResponse> findByProjectProductIdAndActiveTrue(Long id);

	@Modifying
	@Query(value = "update License set accessId=?2, generatedKey=?3, name=?4, modifiedBy.id=?5, modifiedAt=?6 where id =?1")
	public int update(Long unmaskId, String uniqueAccessId, String generatedKey, String name, Long userId, Date date);

	@Modifying
	@Query(value = "update License set active=?2, status=?3 , modifiedBy.id=?4, modifiedAt=?5 where id =?1")
	public int update(Long unmaskId, boolean b, LicenseStatus replaced, Long userId, Date date);

	public List<LicenseResponse> findByProjectProductProjectIdAndActive(Long unmaskProjectId, Boolean active);

	public List<LicenseResponse> findByProjectProductProjectIdAndProjectProductProjectCustomerEmailAndActive(
			Long unmaskProjectId, String email, Boolean active);

	public List<LicenseResponse> findByProjectProductProjectIdAndProjectProductProjectProjectManagerIdAndActive(
			Long unmaskProjectId, Long userId, Boolean active);

	public List<LicenseResponse> findByProjectProductIdAndProjectProductProjectIdAndProjectProductProjectProjectManagerIdAndActive(
			Long unmaskProjectProductId, Long unmaskProjectId, Long userId, Boolean active);

	public List<LicenseResponse> findByProjectProductIdAndProjectProductProjectIdAndProjectProductProjectCustomerEmailAndActive(
			Long unmask, Long unmaskProjectId, String email, Boolean active);

	public List<LicenseResponse> findByProjectProductIdAndProjectProductProjectIdAndActive(Long unmask,
			Long unmaskProjectId, Boolean active);

	public LicenseResponse findByIdAndProjectProductProjectCustomerEmailAndActive(Long unmaskId, String email,
			Boolean active);

	public LicenseResponse findByIdAndProjectProductProjectProjectManagerIdAndActive(Long unmaskId, Long userId,
			Boolean active);

	public List<LicenseResponse> findByProjectProductProductDetailIdAndProjectProductProjectIdAndProjectProductProjectProjectManagerIdAndActive(
			Long unmaskedProductId, Long unmaskProjectId, Long userId, Boolean active);

	public List<LicenseResponse> findByProjectProductProductDetailIdAndProjectProductProjectIdAndProjectProductProjectCustomerEmailAndActive(
			Long unmaskedProductId, Long unmaskProjectId, String email, Boolean active);

	public List<LicenseResponse> findByProjectProductProductDetailIdAndProjectProductProjectIdAndActive(
			Long unmaskedProductId, Long unmaskProjectId, Boolean active);

	public List<LicenseResponse> findByProjectProductIdAndAccessIdIsNullAndActive(Long unmaskId, Boolean active);

	@Modifying
	@Query(value = "update License set active = false, modified_by =?2, modified_at =?3 where project_product_id =?1")
	public int deleteByProjectProductId(Long unmask, Long userId, Date date);

	@Modifying
	@Query(value = "SELECT  p.customer_name , count(l.id) license_count FROM license_key_management.license l inner join project_product pp on pp.id = l.project_product_id inner join project p on p.id = pp.project_id where l.active=true and p.customer_email=?1 group by p.customer_email", nativeQuery = true)
	public List<Map<String, Integer>> findTotalLicenseCountByCustomerEmail(String email);

	@Modifying
	@Query(value = "SELECT  p.customer_name , count(l.id) license_count FROM license_key_management.license l inner join project_product pp on pp.id = l.project_product_id inner join project p on p.id = pp.project_id where l.active=true and p.project_manager_id=?1 group by p.customer_email", nativeQuery = true)
	public List<Map<String, Integer>> findTotalLicenseCountByProjectManagerId(Long userId);

	@Modifying
	@Query(value = "SELECT  p.customer_name customer_name , count(l.id) total_license_distributed FROM license_key_management.license l inner join project_product pp on pp.id = l.project_product_id inner join project p on p.id = pp.project_id where l.active=true group by p.customer_email", nativeQuery = true)
	public List<Map<String, Integer>> findTotalLicenseCount();

	public List<LicenseResponse> findByProjectProductIdAndAccessIdNotNullAndGeneratedKeyNotNullAndProjectProductProjectCustomerEmailAndActive(
			Long unmaskProjectProductId, String email, boolean b);

	public List<LicenseResponse> findByProjectProductIdAndAccessIdNotNullAndGeneratedKeyNotNullAndProjectProductProjectProjectManagerIdAndActive(
			Long unmaskProjectProductId, Long userId, boolean b);

	public List<LicenseResponse> findByProjectProductIdAndAccessIdNotNullAndGeneratedKeyNotNullAndActive(
			Long unmaskProjectProductId, boolean b);

	@Query(value = "SELECT count(l.id) generatedLicense " + "FROM license_key_management.license l "
			+ "inner join project_product pp on l.project_product_id=pp.id "
			+ "inner join project p on pp.project_id=p.id " + "where pp.project_id=?1 " + "and p.customer_email=?2 "
			+ "and l.active=?3 " + "and l.access_id is not null ", nativeQuery = true)
	public Integer findCountByProjectIdAndAccessIdNotNullAndProjectProductProjectCustomerEmailAndActive(
			Long unmaskProjectId, String email, boolean b);

	@Query(value = "SELECT count(l.id) generatedLicense " + "FROM license_key_management.license l "
			+ "inner join project_product pp on l.project_product_id=pp.id "
			+ "inner join project p on pp.project_id=p.id " + "where pp.project_id=?1 " + "and p.project_manager_id=?2 "
			+ "and l.active=?3 " + "and l.access_id is not null ", nativeQuery = true)
	public Integer findCountByProjectIdAndAccessIdNotNullAndProjectProductProjectProjectManagerIdAndActive(
			Long unmaskProjectId, Long userId, boolean b);

	@Query(value = "SELECT count(l.id) generatedLicense " + "FROM license_key_management.license l "
			+ "inner join project_product pp on l.project_product_id=pp.id " + "where pp.project_id=?1 "
			+ "and l.active=?2 " + "and l.access_id is not null", nativeQuery = true)
	public Integer findByProjectProductIdAndAccessIdNotNullAndActive(Long unmaskProjectId, boolean b);

//	@Modifying
//	@Query(value = "update License set active=?2, modifiedBy.id=?3, modifiedAt=?4 where id =?1")
//	public int update(Long unmaskId, Boolean active, Long userId, Date date);

}
