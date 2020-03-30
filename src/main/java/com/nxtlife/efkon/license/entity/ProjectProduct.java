package com.nxtlife.efkon.license.entity;

import java.io.Serializable;
import java.sql.Date;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import com.nxtlife.efkon.license.entity.common.BaseEntity;

@SuppressWarnings("serial")
@Entity
@Table(name = "project_product")
@DynamicInsert(value = true)
@DynamicUpdate(value = true)
public class ProjectProduct extends BaseEntity implements Serializable {

	private Long licenseCount;

	@Column(nullable = false)
	private String licenseType;

	@Column(nullable = false)
	private String expirationPeriodType;

	private long expirationMonthCount;

	@Column(nullable = false)
	private Date startDate;

	@Column(nullable = false)
	private Date endDate;

	@Column(nullable = false)
	private String approvalStatus;

	@ManyToOne
	private Project project;

	@ManyToOne
	private ProductDetail productDetail;

	@OneToMany(mappedBy = "projectProduct")
	private Set<License> licenses;

	@OneToMany(mappedBy = "projectProduct")
	private Set<ProjectProductComment> projectProductComments;

	public ProjectProduct() {
		super();
	}

	public ProjectProduct(Long licenseCount, String licenseType, String expirationPeriodType, long expirationMonthCount,
			Date startDate, Date endDate, String approvalStatus, Project project, ProductDetail productDetail,
			Set<License> licenses, Set<ProjectProductComment> projectProductComments) {
		super();
		this.licenseCount = licenseCount;
		this.licenseType = licenseType;
		this.expirationPeriodType = expirationPeriodType;
		this.expirationMonthCount = expirationMonthCount;
		this.startDate = startDate;
		this.endDate = endDate;
		this.approvalStatus = approvalStatus;
		this.project = project;
		this.productDetail = productDetail;
		this.licenses = licenses;
		this.projectProductComments = projectProductComments;
	}

	public Long getLicenseCount() {
		return licenseCount;
	}

	public void setLicenseCount(Long licenseCount) {
		this.licenseCount = licenseCount;
	}

	public String getLicenseType() {
		return licenseType;
	}

	public void setLicenseType(String licenseType) {
		this.licenseType = licenseType;
	}

	public String getExpirationPeriodType() {
		return expirationPeriodType;
	}

	public void setExpirationPeriodType(String expirationPeriodType) {
		this.expirationPeriodType = expirationPeriodType;
	}

	public long getExpirationMonthCount() {
		return expirationMonthCount;
	}

	public void setExpirationMonthCount(long expirationMonthCount) {
		this.expirationMonthCount = expirationMonthCount;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public String getApprovalStatus() {
		return approvalStatus;
	}

	public void setApprovalStatus(String approvalStatus) {
		this.approvalStatus = approvalStatus;
	}

	public Project getProject() {
		return project;
	}

	public void setProject(Project project) {
		this.project = project;
	}

	public ProductDetail getProductDetail() {
		return productDetail;
	}

	public void setProductDetail(ProductDetail productDetail) {
		this.productDetail = productDetail;
	}

	public Set<License> getLicenses() {
		return licenses;
	}

	public void setLicenses(Set<License> licenses) {
		this.licenses = licenses;
	}

	public Set<ProjectProductComment> getProjectProductComments() {
		return projectProductComments;
	}

	public void setProjectProductComments(Set<ProjectProductComment> projectProductComments) {
		this.projectProductComments = projectProductComments;
	}

}
