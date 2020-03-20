package com.nxtlife.efkon.license.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class ProjectProductComment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String comment;
	
	private String commentedBy;
	
	private String remark;
	
	@ManyToOne
	private ProjectProduct projectProduct;

	public ProjectProductComment() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ProjectProductComment(Long id, String comment, String commentedBy, String remark,
			ProjectProduct projectProduct) {
		super();
		this.id = id;
		this.comment = comment;
		this.commentedBy = commentedBy;
		this.remark = remark;
		this.projectProduct = projectProduct;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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
