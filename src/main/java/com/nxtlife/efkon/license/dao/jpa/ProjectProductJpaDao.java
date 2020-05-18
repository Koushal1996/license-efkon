package com.nxtlife.efkon.license.dao.jpa;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.nxtlife.efkon.license.entity.project.product.ProjectProduct;
import com.nxtlife.efkon.license.enums.ExpirationPeriodType;
import com.nxtlife.efkon.license.enums.ProjectProductStatus;
import com.nxtlife.efkon.license.view.project.product.ProjectProductGraphResponse;
import com.nxtlife.efkon.license.view.project.product.ProjectProductResponse;

@Repository
public interface ProjectProductJpaDao extends JpaRepository<ProjectProduct, Long> {

	public List<ProjectProductResponse> findByProjectIdAndActive(Long ProjectId, Boolean active);

	public List<ProjectProductResponse> findByProjectProjectManagerIdAndActive(Long projectManagerId, Boolean active);

	public List<ProjectProductResponse> findByProjectIdAndProjectProjectManagerIdAndActive(Long projectId,
			Long projectManagerId, Boolean active);

	public List<ProjectProductResponse> findByProjectCustomerEmailAndActive(String customerEmail, Boolean active);

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
	@Query(value = "update ProjectProduct set licenseCount=?2, licenseType.id =?3, expirationPeriodType=?4, expirationMonthCount=?5, startDate=?6, endDate=?7, modifiedBy.id =?8, modifiedAt =?9 where id =?1")
	public int update(Long id, Integer licenseCount, Long licenseTypeId, ExpirationPeriodType expirationPeriodType,
			Integer expirationMonthCoun, String startDate, String endDate, Long userId, Date date);

	@Modifying
	@Query(value = "update ProjectProduct set status=?2, modifiedBy.id =?3, modifiedAt =?4 where id =?1")
	public int update(Long id, ProjectProductStatus status, Long userId, Date date);

	@Modifying
	@Query(value = "update ProjectProduct set active = false, modifiedBy.id =?2, modifiedAt =?3 where id =?1")
	public int delete(Long id, Long userId, Date date);

	@Query(value = "SELECT new com.nxtlife.efkon.license.view.project.product.ProjectProductGraphResponse(pp.status, COUNT(pp.id))"
			+ "FROM ProjectProduct AS pp where pp.active =?1 GROUP BY pp.status")
	public List<ProjectProductGraphResponse> countTotalProductsByStatusAndActive(Boolean active);

	@Query(value = "SELECT new com.nxtlife.efkon.license.view.project.product.ProjectProductGraphResponse(projectProduct.status, COUNT(projectProduct.id))"
			+ "FROM ProjectProduct projectProduct inner join Project project on projectProduct.project.id = project.id where project.customerEmail=?1 and projectProduct.active =?2 GROUP BY projectProduct.status")
	public List<ProjectProductGraphResponse> countProductByStatusAndProjectCustomerEmailAndActive(String email,
			Boolean active);

	@Query(value = "SELECT new com.nxtlife.efkon.license.view.project.product.ProjectProductGraphResponse(projectProduct.status, COUNT(projectProduct.id))"
			+ "FROM ProjectProduct projectProduct inner join Project project on projectProduct.project.id = project.id where project.projectManager.id=?1 and projectProduct.active =?2 GROUP BY projectProduct.status")
	public List<ProjectProductGraphResponse> countProductByStatusAndProjectProjectManagerIdAndActive(Long userId,
			Boolean active);

	@Query(value = "SELECT new com.nxtlife.efkon.license.view.project.product.ProjectProductGraphResponse(SUM(projectProduct.licenseCount))"
			+ "FROM ProjectProduct projectProduct where projectProduct.endDate >= curdate() and projectProduct.active = true")
	public ProjectProductGraphResponse findActiveLicenses();

	@Query(value = "SELECT new com.nxtlife.efkon.license.view.project.product.ProjectProductGraphResponse(SUM(projectProduct.licenseCount))"
			+ "FROM ProjectProduct projectProduct where projectProduct.endDate < curdate() and projectProduct.active = true")
	public ProjectProductGraphResponse findExpiredLicenses();

	@Query(value = "SELECT new com.nxtlife.efkon.license.view.project.product.ProjectProductGraphResponse(SUM(projectProduct.licenseCount))"
			+ "FROM ProjectProduct projectProduct inner join Project project on projectProduct.project.id = project.id "
			+ "where projectProduct.endDate >= curdate() and projectProduct.active = true and project.customerEmail=?1")
	public ProjectProductGraphResponse findActiveLicensesByCustomerEmail(String email);

	@Query(value = "SELECT new com.nxtlife.efkon.license.view.project.product.ProjectProductGraphResponse(SUM(pp.licenseCount))"
			+ "FROM ProjectProduct pp inner join Project p on pp.project.id = p.id "
			+ "where pp.endDate >= curdate() and pp.active = true and p.projectManager.id=?1")
	public ProjectProductGraphResponse findActiveLicensesByProjectManagerId(Long userId);

	@Query(value = "SELECT new com.nxtlife.efkon.license.view.project.product.ProjectProductGraphResponse(SUM(projectProduct.licenseCount))"
			+ "FROM ProjectProduct projectProduct inner join Project project on projectProduct.project.id = project.id "
			+ "where projectProduct.endDate < curdate() and projectProduct.active = true and project.customerEmail=?1")
	public ProjectProductGraphResponse findExpiredLicensesByCustomerEmail(String email);

	@Query(value = "SELECT new com.nxtlife.efkon.license.view.project.product.ProjectProductGraphResponse(SUM(pp.licenseCount))"
			+ "FROM ProjectProduct pp inner join Project p on pp.project.id = p.id "
			+ "where pp.endDate < curdate() and pp.active = true and p.projectManager.id=?1")
	public ProjectProductGraphResponse findExpiredLicensesByProjectManagerId(Long userId);

}
