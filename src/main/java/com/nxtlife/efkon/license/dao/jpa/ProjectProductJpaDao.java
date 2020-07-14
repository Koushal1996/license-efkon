package com.nxtlife.efkon.license.dao.jpa;

import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.persistence.Tuple;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.nxtlife.efkon.license.entity.project.product.ProjectProduct;
import com.nxtlife.efkon.license.enums.ExpirationPeriodType;
import com.nxtlife.efkon.license.enums.ProjectProductStatus;
import com.nxtlife.efkon.license.view.license.LicenseReportResponse;
import com.nxtlife.efkon.license.view.project.product.ProjectProductGraphResponse;
import com.nxtlife.efkon.license.view.project.product.ProjectProductResponse;

@Repository
public interface ProjectProductJpaDao extends JpaRepository<ProjectProduct, Long> {

	public List<ProjectProductResponse> findByProjectIdAndActive(Long ProjectId, Boolean active);

	public List<ProjectProductResponse> findByProjectProjectManagerIdAndActive(Long projectManagerId, Boolean active);

	public List<ProjectProductResponse> findByProjectProjectManagerIdAndProjectCustomerEmailAndActiveAndStatus(
			Long projectManagerId, String customerEmail, Boolean active, ProjectProductStatus status);

	public List<ProjectProductResponse> findByProjectIdAndProjectProjectManagerIdAndActive(Long projectId,
			Long projectManagerId, Boolean active);

	public List<ProjectProductResponse> findByProjectCustomerEmailAndActive(String customerEmail, Boolean active);

	public List<ProjectProductResponse> findByProjectCustomerEmailAndActiveAndStatus(String customerEmail,
			Boolean active, ProjectProductStatus status);

	public List<ProjectProductResponse> findByProjectIdAndProjectCustomerEmailAndActive(Long projectId,
			String customerEmail, Boolean active);

	public ProjectProductResponse findByIdAndProjectProjectManagerIdAndActive(Long id, Long projectManagerId,
			Boolean active);

	public ProjectProductResponse findByIdAndProjectCustomerEmailAndActive(Long id, String customerEmail,
			Boolean active);

	public ProjectProductResponse findByIdAndActive(Long id, Boolean active);

	public List<ProjectProductResponse> findByActive(Boolean active);

	public ProjectProductResponse findResponseById(Long id);

	public List<ProjectProductResponse> findByProjectIdAndProductDetailIdAndActiveTrue(Long projectId,
			Long projectDetailId);

	public List<ProjectProductResponse> findByProductDetailIdAndProjectIdAndProjectCustomerEmailAndActive(
			Long unmaskedProductId, Long unmaskProjectId, String email, boolean active);

	public List<ProjectProductResponse> findByProductDetailIdAndProjectIdAndProjectProjectManagerIdAndActive(
			Long unmaskedProductId, Long unmaskProjectId, Long userId, boolean active);

	public Boolean existsByProductDetailIdAndActive(Long productDetailId, Boolean active);

	public Boolean existsByProjectIdAndProductDetailId(Long projectId, Long projectDetailId);

	public Boolean existsByProjectIdAndProductDetailIdAndActiveTrue(Long unmaskProjectId, Long unmaskProductId);

	public Boolean existsByIdAndActive(Long id, Boolean active);

	@Query(value = "select project.projectManager.id from ProjectProduct projectProduct inner join Project project on projectProduct.project.id=project.id where projectProduct.id =?1")
	public Long findProjectManagerIdByProjectProductId(Long id);

	@Query(value = "select project.id as id, count(id) as count from ProjectProduct where active = ?1 group by project.id")
	public List<Map<String, Object>> findProjectIdAndCountByGroupByProjectIdAndActive(Boolean active);

	@Query(value = "select project.id as id, count(id) as count from ProjectProduct where active = ?1 and project.customerEmail = ?2 and status is not ?3 group by project.id")
	public List<Map<String, Object>> findProjectIdAndCountByGroupByProjectIdAndActiveAndCustomerEmailAndNotStatus(
			Boolean active, String customerEmail, ProjectProductStatus status);

	@Query(value = "select project.id as id, count(id) as count from ProjectProduct where active = ?1 and project.projectManager.id=?2 group by project.id ")
	public List<Map<String, Object>> findProjectIdAndCountByGroupByProjectIdAndActiveAndProjectManagerId(Boolean active,
			Long projectManagerId);

	@Query(value = "select projectProduct.status from ProjectProduct projectProduct inner join Project project on projectProduct.project.id = project.id where projectProduct.id =?1 and project.projectManager.id=?2 and projectProduct.active=?3")
	public ProjectProductStatus findStatusByIdAndProjectProjectManagerIdAndActive(Long id, Long projectManagerId,
			Boolean active);

	@Query(value = "select projectProduct.status from ProjectProduct projectProduct inner join Project project on projectProduct.project.id = project.id where projectProduct.id =?1 and project.customerEmail=?2 and projectProduct.active=?3")
	public ProjectProductStatus findStatusByIdAndProjectCustomerEmailAndActive(Long id, String customerEmail,
			Boolean active);

	@Query(value = "select status from ProjectProduct where id =?1 and active=?2")
	public ProjectProductStatus findStatusByIdAndActive(Long id, Boolean active);

	@Query(value = "select licenseCount from ProjectProduct where id =?1")
	public Integer findLicenseCountById(Long id);

	@Modifying
	@Query(value = "update ProjectProduct set licenseCount=?2, licenseType.id =?3, expirationPeriodType=?4, expirationMonthCount=?5, startDate=?6, endDate=?7, modifiedBy.id =?8, modifiedAt =?9 ,status=?10 where id =?1")
	public int update(Long id, Integer licenseCount, Long licenseTypeId, ExpirationPeriodType expirationPeriodType,
			Integer expirationMonthCoun, String startDate, String endDate, Long userId, Date date,
			ProjectProductStatus status);

	@Modifying
	@Query(value = "update ProjectProduct set status=?2, modifiedBy.id =?3, modifiedAt =?4 where id =?1")
	public int update(Long id, ProjectProductStatus status, Long userId, Date date);

	@Modifying
	@Query(value = "update ProjectProduct set active = false, modifiedBy.id =?2, modifiedAt =?3 where id =?1")
	public int delete(Long id, Long userId, Date date);

	@Query(value = "SELECT COUNT(pp.id) FROM ProjectProduct pp inner join Project p on pp.project.id = p.id where p.customerEmail=:email and pp.status=:status and pp.active =:active")
	public Long countProductByStatusAndProjectCustomerEmailAndActive(@Param("status") ProjectProductStatus status,
			@Param("email") String email, @Param("active") Boolean active);

	@Query(value = "SELECT pp.status as status, COUNT(pp.id) as productCount, SUM(pp.licenseCount) as licenseCount "
			+ "FROM ProjectProduct pp inner join Project p on pp.project.id = p.id where p.projectManager.id=?1 "
			+ "and pp.active =?2 and pp.status not in ?3 GROUP BY pp.status")
	public List<Tuple> countProductAndSumLicenseCountByStatusAndProjectProjectManagerIdAndActiveAndNotInStatus(
			Long userId, Boolean active, List<ProjectProductStatus> statusList);

	@Query(value = "SELECT COUNT(pp.id) as productCount, SUM(pp.licenseCount) as licenseCount "
			+ "FROM ProjectProduct pp inner join Project p on pp.project.id = p.id where p.projectManager.id=?2 "
			+ "and pp.active =?3 and pp.status = ?1 and pp.endDate<=?4")
	public Tuple countProductAndSumLicenseCountByStatusAndProjectProjectManagerIdAndActiveAndBeforeEndDate(
			ProjectProductStatus status, Long userId, Boolean active, String date);

	@Query(value = "SELECT pp.status as status, COUNT(pp.id) as productCount, SUM(pp.licenseCount) as licenseCount "
			+ "FROM ProjectProduct AS pp where pp.active =?1 and pp.status not in ?2 GROUP BY pp.status")
	public List<Tuple> countProductAndSumLicenseCountByStatusAndActiveAndNotInStatus(Boolean active,
			List<ProjectProductStatus> statusList);

	@Query(value = "SELECT COUNT(pp.id) as productCount, SUM(pp.licenseCount) as licenseCount "
			+ "FROM ProjectProduct AS pp where pp.active =?2 and pp.status = ?1 and pp.endDate <= ?3")
	public Tuple countProductAndSumLicenseCountByStatusAndActiveAndBeforeEndDate(ProjectProductStatus status,
			Boolean active, String date);

	@Query(value = "SELECT max(p.customerName) as customerName, p.customerEmail as customerEmail, COUNT(pp.id) as productCount, SUM(pp.licenseCount) as licenseCount "
			+ "FROM ProjectProduct AS pp inner join Project p on pp.project.id = p.id where pp.active =?2 and pp.status = ?1 group by p.customerEmail")
	public List<Tuple> countProductAndSumLicenseCountByStatusAndActiveAndGroupByCustomerEmail(
			ProjectProductStatus status, Boolean active);

	@Query(value = "SELECT max(p.customerName) as customerName, p.customerEmail as customerEmail, COUNT(pp.id) as productCount, SUM(pp.licenseCount) as licenseCount "
			+ "FROM ProjectProduct AS pp inner join Project p on pp.project.id = p.id where p.projectManager.id=?1 and pp.active =?3 and pp.status = ?2 group by p.customerEmail")
	public List<Tuple> countProductAndSumLicenseCountByStatusAndProjectProjectManagerIdAndActiveAndGroupByCustomerEmail(
			Long userId, ProjectProductStatus status, Boolean active);

	@Query(value = "select  new com.nxtlife.efkon.license.view.project.product.ProjectProductGraphResponse((case when pp.endDate >=curdate() then 'active' else 'expired' end) as status, sum(pp.licenseCount) as count) "
			+ "from ProjectProduct pp where pp.active=true "
			+ "group by (case when pp.endDate >=curdate() then 'active' else 'expired' end)")
	public List<ProjectProductGraphResponse> findTotalActiveAndExpiredLicenseCount();

	@Query(value = "select  new com.nxtlife.efkon.license.view.project.product.ProjectProductGraphResponse((case when pp.endDate >=curdate() then 'active' else 'expired' end) as status, sum(pp.licenseCount) as count) "
			+ "from ProjectProduct pp inner join Project p on pp.project.id = p.id where pp.active=true and p.customerEmail=?1 "
			+ "group by (case when pp.endDate >=curdate() then 'active' else 'expired' end)")
	public List<ProjectProductGraphResponse> findTotalActiveAndExpiredLicenseCountByCustomerEmail(String customerEmail);

	@Query(value = "select  new com.nxtlife.efkon.license.view.project.product.ProjectProductGraphResponse((case when pp.endDate >=curdate() then 'active' else 'expired' end) as status, sum(pp.licenseCount) as count) "
			+ "from ProjectProduct pp inner join Project p on pp.project.id = p.id where pp.active=true and p.projectManager.id=?1 "
			+ "group by (case when pp.endDate >=curdate() then 'active' else 'expired' end)")
	public List<ProjectProductGraphResponse> findTotalActiveAndExpiredLicenseCountByProjectManagerId(Long userId);

	public Long countByProjectIdAndActive(Long unmaskId, boolean b);

	@Modifying
	@Query(value = "update ProjectProduct set active = false, modified_by =?2, modified_at =?3 where project_id =?1")
	public void deleteByProjectId(Long unmaskId, Long userId, Date date);

	@Query(value = "select  new com.nxtlife.efkon.license.view.license.LicenseReportResponse(p.customerName, pf.name, pc.name, lt.name, pp.startDate, pp.endDate, pp.expirationMonthCount, pp.licenseCount) "
			+ "from ProjectProduct pp inner join Project p on pp.project.id=p.id "
			+ "inner join ProductDetail pd on pp.productDetail.id=pd.id "
			+ "inner join ProductFamily pf on pd.productFamily.id=pf.id "
			+ "inner join ProductCode pc on pd.productCode.id = pc.id "
			+ "inner join LicenseType lt on pp.licenseType.id=lt.id " + "where p.customerEmail=?1 and pp.status=?2")
	public List<LicenseReportResponse> findLicenseReportByCustomerEmailAndStatus(String email,
			ProjectProductStatus approved);

	@Query(value = "select  new com.nxtlife.efkon.license.view.license.LicenseReportResponse(p.customerName, pf.name, pc.name, lt.name, pp.startDate, pp.endDate, pp.expirationMonthCount, pp.licenseCount) "
			+ "from ProjectProduct pp inner join Project p on pp.project.id=p.id "
			+ "inner join ProductDetail pd on pp.productDetail.id=pd.id "
			+ "inner join ProductFamily pf on pd.productFamily.id=pf.id "
			+ "inner join ProductCode pc on pd.productCode.id = pc.id "
			+ "inner join LicenseType lt on pp.licenseType.id=lt.id "
			+ "where p.customerEmail=?1 and pp.status=?2 and p.projectManager.id=?3")
	public List<LicenseReportResponse> findLicenseReportByCustomerEmailAndStatusByProjectManagerId(String email,
			ProjectProductStatus approved, Long userId);

	public ProjectProductResponse findResponseByIdAndActive(Long unmaskProjectProductId, Boolean b);

	@Query(value = "SELECT sum(pp.license_count) FROM project_product pp "
			+ "where pp.project_id=?1 and pp.status=?2 and active=?3", nativeQuery = true)
	public Integer sumByLicenseCountAndProjectIdAndStatusAndActive(Long projectId, ProjectProductStatus status,
			boolean b);

	@Query(value = "SELECT COUNT(pp.id) as productCount, SUM(pp.licenseCount) as licenseCount "
			+ "FROM ProjectProduct AS pp where pp.active =?3 and pp.status = ?1 and pp.createdBy.id = ?2 ")
	public Tuple countProductAndSumLicenseCountByStatusAndCreatedByIdAndActive(ProjectProductStatus status, Long userId,
			Boolean active);

	@Query(value = "SELECT COUNT(pp.id) as productCount, SUM(pp.licenseCount) as licenseCount "
			+ "FROM ProjectProduct AS pp where pp.active =?3 and pp.status = ?1 and pp.modifiedBy.id = ?2 ")
	public Tuple countProductAndSumLicenseCountByStatusAndModifiedByIdAndActive(ProjectProductStatus status,
			Long userId, Boolean active);

	public List<ProjectProductResponse> findByStatusAndProjectCustomerEmailAndActive(ProjectProductStatus approved,
			String email, Boolean b);

}
