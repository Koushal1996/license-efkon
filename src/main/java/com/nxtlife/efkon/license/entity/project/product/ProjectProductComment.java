package com.nxtlife.efkon.license.entity.project.product;

import com.nxtlife.efkon.license.entity.common.BaseEntity;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import java.io.Serializable;

@SuppressWarnings("serial")
@Entity
@DynamicUpdate(value = true)
@DynamicInsert(value = true)
public class ProjectProductComment extends BaseEntity implements Serializable {
	
	private String comment;
	
	private String commentedBy;
	
	private String remark;
	
	@ManyToOne
	private ProjectProduct projectProduct;

	public ProjectProductComment() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ProjectProductComment( String comment, String commentedBy, String remark,
			ProjectProduct projectProduct) {
		super();
		this.comment = comment;
		this.commentedBy = commentedBy;
		this.remark = remark;
		this.projectProduct = projectProduct;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public String getCommentedBy() {
		return commentedBy;
	}

	public void setCommentedBy(String commentedBy) {
		this.commentedBy = commentedBy;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	public ProjectProduct getProjectProduct() {
		return projectProduct;
	}

	public void setProjectProduct(ProjectProduct projectProduct) {
		this.projectProduct = projectProduct;
	}
	
}
