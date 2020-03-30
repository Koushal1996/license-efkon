package com.nxtlife.efkon.license.entity.project;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;

import com.nxtlife.efkon.license.entity.common.BaseEntity;
import com.nxtlife.efkon.license.entity.project.product.ProjectProduct;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

@SuppressWarnings("serial")
@Entity
@DynamicUpdate(value = true)
@DynamicInsert(value = true)
public class Project extends BaseEntity implements Serializable {

    @NotNull(message = "customer_name can't be null")
    private String customerName;

    @NotNull(message = "customer_email can't be null")
    @Column(unique = true)
    private String customerEmail;

    @Column(unique = true)
    private String customerPhoneNo;

    @NotNull(message = "email_send_status can't be null")
    private String emailSendStatus;

    @ManyToOne
    private ProjectType projectType;

    @OneToMany(mappedBy = "project", cascade = CascadeType.ALL)
    private Set<ProjectProduct> projectProducts;

    public Project() {
        super();
        // TODO Auto-generated constructor stub
    }

    public Project(@NotNull(message = "customer_name can't be null") String customerName, String customerEmail, String customerPhoneNo,
                   @NotNull(message = "email_send_status can't be null") String emailSendStatuss) {
        this.customerName = customerName;
        this.customerEmail = customerEmail;
        this.customerPhoneNo = customerPhoneNo;
        this.emailSendStatus = emailSendStatus;
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

    public String getCustomerPhoneNo() {
        return customerPhoneNo;
    }

    public void setCustomerPhoneNo(String customerPhoneNo) {
        this.customerPhoneNo = customerPhoneNo;
    }

    public String getEmailSendStatus() {
        return emailSendStatus;
    }

    public void setEmailSendStatus(String emailSendStatus) {
        this.emailSendStatus = emailSendStatus;
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
