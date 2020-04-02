package com.nxtlife.efkon.license.entity.project;

import com.nxtlife.efkon.license.entity.common.BaseEntity;
import com.nxtlife.efkon.license.entity.project.product.ProjectProduct;
import com.nxtlife.efkon.license.entity.user.User;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Set;

@SuppressWarnings("serial")
@Entity
@DynamicUpdate(value = true)
@DynamicInsert(value = true)
public class Project extends BaseEntity implements Serializable {

    @NotNull(message = "customer_name can't be null")
    private String customerName;

    @NotNull(message = "customer_email can't be null")
    private String customerEmail;

    private String customerContactNo;

    @NotNull(message = "is_email_send can't be null")
    private Boolean isEmailSend;

    @ManyToOne
    private ProjectType projectType;

    @ManyToOne
    private User user;

    @Transient
    private Long userId;

    @Transient
    private Long tProjectTypeId;

    @OneToMany(mappedBy = "project", cascade = CascadeType.ALL)
    private Set<ProjectProduct> projectProducts;

    public Project() {
        super();
        // TODO Auto-generated constructor stub
    }

    public Project(@NotNull(message = "customer_name can't be null") String customerName, String customerEmail, String customerContactNo,
                   @NotNull(message = "is_email_send can't be null") Boolean isEmailSend) {
        this.customerName = customerName;
        this.customerEmail = customerEmail;
        this.customerContactNo = customerContactNo;
        this.isEmailSend = isEmailSend;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getCustomerEmail() {
        return customerEmail;
    }

    public void setCustomerEmail(String customerEmail) {
        this.customerEmail = customerEmail;
    }

    public String getCustomerContactNo() {
        return customerContactNo;
    }

    public void setCustomerContactNo(String customerContactNo) {
        this.customerContactNo = customerContactNo;
    }

    public Boolean getIsEmailSend() {
        return isEmailSend;
    }

    public void setIsEmailSend(Boolean emailSend) {
        isEmailSend = emailSend;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        if (userId != null) {
            this.user = new User();
            this.user.setId(userId);
        }
        this.userId = userId;
    }

    public Long gettProjectTypeId() {
        return tProjectTypeId;
    }

    public void settProjectTypeId(Long tProjectTypeId) {
        if (tProjectTypeId != null) {
            this.projectType = new ProjectType();
            this.projectType.setId(tProjectTypeId);
        }
        this.tProjectTypeId = tProjectTypeId;
    }

    public ProjectType getProjectType() {
        return projectType;
    }

    public void setProjectType(ProjectType projectType) {
        this.projectType = projectType;
    }

    public Set<ProjectProduct> getProjectProducts() {
        return projectProducts;
    }

    public void setProjectProducts(Set<ProjectProduct> projectProducts) {
        this.projectProducts = projectProducts;
    }

}
