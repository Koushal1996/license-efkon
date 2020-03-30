package com.nxtlife.efkon.license.entity;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import com.nxtlife.efkon.license.entity.common.BaseEntity;

@SuppressWarnings("serial")
@Entity
@Table(name = "project")
@DynamicInsert(value = true)
@DynamicUpdate(value = true)
public class Project extends BaseEntity implements Serializable {

	@Column(unique = true, nullable = false)
	private String customerName;

	@Column(unique = true)
	private String customerEmail;

	@Column(unique = true)
	private String customerPhoneNumber;

	@Column(nullable = false)
	private String emailSendStatus;

	@ManyToOne
	private ProjectType projectType;

	@OneToMany(mappedBy = "project", cascade = CascadeType.ALL)
	private Set<ProjectProduct> projectProducts;

	public Project() {
		super();
	}

	public Project(String customerName, String customerEmail, String customerPhoneNumber, String emailSendStatus,
			ProjectType projectType, Set<ProjectProduct> projectProducts) {
		super();
		this.customerName = customerName;
		this.customerEmail = customerEmail;
		this.customerPhoneNumber = customerPhoneNumber;
		this.emailSendStatus = emailSendStatus;
		this.projectType = projectType;
		this.projectProducts = projectProducts;
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

	public String getCustomerPhoneNumber() {
		return customerPhoneNumber;
	}

	public void setCustomerPhoneNumber(String customerPhoneNumber) {
		this.customerPhoneNumber = customerPhoneNumber;
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

	@Override
	public String toString() {
		return "Project [customerName=" + customerName + ", customerEmail=" + customerEmail + ", customerPhoneNumber="
				+ customerPhoneNumber + ", emailSendStatus=" + emailSendStatus + ", projectType=" + projectType
				+ ", projectProducts=" + projectProducts + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((customerEmail == null) ? 0 : customerEmail.hashCode());
		result = prime * result + ((customerName == null) ? 0 : customerName.hashCode());
		result = prime * result + ((customerPhoneNumber == null) ? 0 : customerPhoneNumber.hashCode());
		result = prime * result + ((emailSendStatus == null) ? 0 : emailSendStatus.hashCode());
		result = prime * result + ((projectProducts == null) ? 0 : projectProducts.hashCode());
		result = prime * result + ((projectType == null) ? 0 : projectType.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Project other = (Project) obj;
		if (customerEmail == null) {
			if (other.customerEmail != null)
				return false;
		} else if (!customerEmail.equals(other.customerEmail))
			return false;
		if (customerName == null) {
			if (other.customerName != null)
				return false;
		} else if (!customerName.equals(other.customerName))
			return false;
		if (customerPhoneNumber == null) {
			if (other.customerPhoneNumber != null)
				return false;
		} else if (!customerPhoneNumber.equals(other.customerPhoneNumber))
			return false;
		if (emailSendStatus == null) {
			if (other.emailSendStatus != null)
				return false;
		} else if (!emailSendStatus.equals(other.emailSendStatus))
			return false;
		if (projectProducts == null) {
			if (other.projectProducts != null)
				return false;
		} else if (!projectProducts.equals(other.projectProducts))
			return false;
		if (projectType == null) {
			if (other.projectType != null)
				return false;
		} else if (!projectType.equals(other.projectType))
			return false;
		return true;
	}

}
