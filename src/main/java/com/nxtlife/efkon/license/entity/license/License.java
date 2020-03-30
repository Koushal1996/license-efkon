package com.nxtlife.efkon.license.entity.license;

import com.nxtlife.efkon.license.entity.common.BaseEntity;
import com.nxtlife.efkon.license.entity.project.product.ProjectProduct;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@SuppressWarnings("serial")
@Entity
@DynamicInsert(value = true)
@DynamicUpdate(value = true)
public class License extends BaseEntity implements Serializable {

    @NotNull(message = "code can't be null")
    private Long code;

    @NotNull(message = "access_id can't be null")
    @Column(unique = true)
    private Long accessId;

    @Column(unique = true)
    private Long generatedKey;

    private String name;

    @NotNull(message = "status can't be null")
    private String status;

    @ManyToOne
    private ProjectProduct projectProduct;

    public License() {
        super();
        // TODO Auto-generated constructor stub
    }

    public License(@NotNull(message = "code can't be null") Long code, @NotNull(message = "access_id can't be null") Long accessId, Long generatedKey, String name,
                   @NotNull(message = "status can't be null") String status) {
        super();
        this.code = code;
        this.accessId = accessId;
        this.generatedKey = generatedKey;
        this.name = name;
        this.status = status;

    }

    public Long getCode() {
        return code;
    }

    public void setCode(Long code) {
        this.code = code;
    }

    public Long getAccessId() {
        return accessId;
    }

    public void setAccessId(Long accessId) {
        this.accessId = accessId;
    }

    public Long getGeneratedKey() {
        return generatedKey;
    }

    public void setGeneratedKey(Long generatedKey) {
        this.generatedKey = generatedKey;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public ProjectProduct getProjectProduct() {
        return projectProduct;
    }

    public void setProjectProduct(ProjectProduct projectProduct) {
        this.projectProduct = projectProduct;
    }

}
