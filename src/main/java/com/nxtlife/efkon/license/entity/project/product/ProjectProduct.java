package com.nxtlife.efkon.license.entity.project.product;

import com.nxtlife.efkon.license.entity.common.BaseEntity;
import com.nxtlife.efkon.license.entity.license.License;
import com.nxtlife.efkon.license.entity.product.ProductDetail;
import com.nxtlife.efkon.license.entity.project.Project;
import com.nxtlife.efkon.license.enums.LicenseType;
import com.nxtlife.efkon.license.enums.ProjectProductStatus;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.sql.Date;
import java.util.Set;

@SuppressWarnings("serial")
@Entity
@DynamicUpdate(value = true)
@DynamicInsert(value = true)
public class ProjectProduct extends BaseEntity implements Serializable {

    private Long licenseCount;

    @NotNull(message = "license_type can't be null")
    @Enumerated(EnumType.STRING)
    private LicenseType licenseType;

    @NotNull(message = "expiration_period_type can't be null")
    private String expirationPeriodType;

    private long expirationMonthCount;

    @NotNull(message = "start_date can't be null")
    private Date startDate;

    @NotNull(message = "end_date can't be null")
    private Date endDate;

    @NotNull(message = "status can't be null")
    @Enumerated(EnumType.STRING)
    private ProjectProductStatus status;

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

    public ProjectProduct(Long licenseCount, @NotNull(message = "license_type can't be null") LicenseType licenseType,
                          @NotNull(message = "expiration_period_type can't be null") String expirationPeriodType,
                          long expirationMonthCount, @NotNull(message = "start_date can't be null") Date startDate, @NotNull(message = "end_date can't be null") Date endDate, @NotNull(message = "status can't be null") ProjectProductStatus status) {
        this.licenseCount = licenseCount;
        this.licenseType = licenseType;
        this.expirationPeriodType = expirationPeriodType;
        this.expirationMonthCount = expirationMonthCount;
        this.startDate = startDate;
        this.endDate = endDate;
        this.status = status;
    }


    public Long getLicenseCount() {
        return licenseCount;
    }

    public void setLicenseCount(Long licenseCount) {
        this.licenseCount = licenseCount;
    }

    public LicenseType getLicenseType() {
        return licenseType;
    }

    public void setLicenseType(LicenseType licenseType) {
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
