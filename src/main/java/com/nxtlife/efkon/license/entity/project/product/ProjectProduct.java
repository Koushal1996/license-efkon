package com.nxtlife.efkon.license.entity.project.product;

import com.nxtlife.efkon.license.entity.common.BaseEntity;
import com.nxtlife.efkon.license.entity.license.License;
import com.nxtlife.efkon.license.entity.product.ProductDetail;
import com.nxtlife.efkon.license.entity.project.Project;
import com.nxtlife.efkon.license.enums.ExpirationPeriodType;
import com.nxtlife.efkon.license.enums.LicenseType;
import com.nxtlife.efkon.license.enums.ProjectProductStatus;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Set;

@SuppressWarnings("serial")
@Entity
@Table(name = "project_product", uniqueConstraints = {@UniqueConstraint(columnNames = {"project_id", "product_detail_id"})})
@DynamicUpdate(value = true)
@DynamicInsert(value = true)
public class ProjectProduct extends BaseEntity implements Serializable {

    @NotNull(message = "license count can't be null")
    private Integer licenseCount;

    @NotNull(message = "license_type can't be null")
    @Enumerated(EnumType.STRING)
    private LicenseType licenseType;

    @NotNull(message = "expiration_period_type can't be null")
    @Enumerated(EnumType.STRING)
    private ExpirationPeriodType expirationPeriodType;


    private Integer expirationMonthCount;

    @NotNull(message = "start_date can't be null")
    private String startDate;


    private String endDate;

    @NotNull(message = "status can't be null")
    @Enumerated(EnumType.STRING)
    private ProjectProductStatus status;

    @ManyToOne
    private Project project;

    @Transient
    private Long tProjectId;

    @Transient
    private Long tProductDetailId;

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

    public ProjectProduct(Integer licenseCount, @NotNull(message = "license_type can't be null") LicenseType licenseType,
                          @NotNull(message = "expiration_period_type can't be null") ExpirationPeriodType expirationPeriodType,
                          Integer expirationMonthCount, @NotNull(message = "start_date can't be null") String startDate, String endDate, @NotNull(message = "status can't be null") ProjectProductStatus status) {
        this.licenseCount = licenseCount;
        this.licenseType = licenseType;
        this.expirationPeriodType = expirationPeriodType;
        this.expirationMonthCount = expirationMonthCount;
        this.startDate = startDate;
        this.endDate = endDate;
        this.status = status;
    }


    public Integer getLicenseCount() {
        return licenseCount;
    }

    public void setLicenseCount(Integer licenseCount) {
        this.licenseCount = licenseCount;
    }

    public LicenseType getLicenseType() {
        return licenseType;
    }

    public void setLicenseType(LicenseType licenseType) {
        this.licenseType = licenseType;
    }

    public ExpirationPeriodType getExpirationPeriodType() {
        return expirationPeriodType;
    }

    public void setExpirationPeriodType(ExpirationPeriodType expirationPeriodType) {
        this.expirationPeriodType = expirationPeriodType;
    }

    public Integer getExpirationMonthCount() {
        return expirationMonthCount;
    }

    public void setExpirationMonthCount(Integer expirationMonthCount) {
        this.expirationMonthCount = expirationMonthCount;
    }

    public Long gettProjectId() {
        return tProjectId;
    }

    public void settProjectId(Long tProjectId) {
        if (tProjectId != null) {
            this.project = new Project();
            this.project.setId(tProjectId);
        }
        this.tProjectId = tProjectId;
    }

    public Long gettProductDetailId() {
        return tProductDetailId;
    }

    public void settProductDetailId(Long tProductDetailId) {
        if (tProductDetailId != null) {
            this.productDetail = new ProductDetail();
            this.productDetail.setId(tProductDetailId);
        }
        this.tProductDetailId = tProductDetailId;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public ProjectProductStatus getStatus() {
        return status;
    }

    public void setStatus(ProjectProductStatus status) {
        this.status = status;
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
