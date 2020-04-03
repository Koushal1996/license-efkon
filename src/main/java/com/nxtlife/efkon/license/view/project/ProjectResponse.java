package com.nxtlife.efkon.license.view.project;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.nxtlife.efkon.license.view.Response;
import com.nxtlife.efkon.license.view.project.product.ProjectProductResponse;
import io.swagger.v3.oas.annotations.media.Schema;

import java.util.List;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
public class ProjectResponse implements Response {

    @Schema(description = "Id of the project", example = "1")
    private Long id;

    @Schema(description = "Name of the customer", example = "Rahul")
    private String customerName;

    @Schema(description = "Email of the customer", example = "abc@gmail.com")
    private String customerEmail;

    @Schema(description = "Is email be send or not", example = "true")
    private Boolean isEmailSend;

    @Schema(description = "Contact of the customer", example = "1234567890")
    private String customerContactNo;

    private ProjectTypeResponse projectTypeResponse;

    private List<ProjectProductResponse> products;

    public ProjectResponse(Long id, String customerName, String customerEmail, Boolean isEmailSend, String customerContactNo) {
        super();
        this.id = id;
        this.customerName = customerName;
        this.customerEmail = customerEmail;
        this.isEmailSend = isEmailSend;
        this.customerContactNo = customerContactNo;
    }

    public Long getId() {
        return mask(id);
    }

    public void setId(Long id) {
        this.id = id;
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

    public Boolean getIsEmailSend() {
        return isEmailSend;
    }

    public void setIsEmailSend(Boolean emailSend) {
        isEmailSend = emailSend;
    }

    public String getCustomerContactNo() {
        return customerContactNo;
    }

    public void setCustomerContactNo(String customerContactNo) {
        this.customerContactNo = customerContactNo;
    }

    public ProjectTypeResponse getProjectTypeResponse() {
        return projectTypeResponse;
    }

    public void setProjectTypeResponse(ProjectTypeResponse projectTypeResponse) {
        this.projectTypeResponse = projectTypeResponse;
    }

    public List<ProjectProductResponse> getProducts() {
        return products;
    }

    public void setProducts(List<ProjectProductResponse> products) {
        this.products = products;
    }
}
