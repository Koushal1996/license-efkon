package com.nxtlife.efkon.license.entity;

import java.sql.Date;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class ProjectProduct {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private Long licenseCount;

	@Column(nullable = false)
	private String licenseType;

	@Column(nullable = false)
	private String expirationPeriodType;

	private long expirationMonthCount;

	@Column(nullable = false)
	private String active;

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
		// TODO Auto-generated constructor stub
	}

	public ProjectProduct(Long id, Long licenseCount, String licenseType, String expirationPeriodType,
			long expirationMonthCount, String active, Date startDate, Date endDate, String approvalStatus,
			Project project, ProductDetail productDetail, Set<License> licenses,
			Set<ProjectProductComment> projectProductComments) {
		super();
		this.id = id;
		this.licenseCount = licenseCount;
		this.licenseType = licenseType;
		this.expirationPeriodType = expirationPeriodType;
		this.expirationMonthCount = expirationMonthCount;
		this.active = active;
		this.startDate = startDate;
		this.endDate = endDate;
		this.approvalStatus = approvalStatus;
		this.project = project;
		this.productDetail = productDetail;
		this.licenses = licenses;
		this.projectProductComments = projectProductComments;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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

	public String getActive() {
		return active;
	}

	public void setActive(String active) {
		this.active = active;
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
