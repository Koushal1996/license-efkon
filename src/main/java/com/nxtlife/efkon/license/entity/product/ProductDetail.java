package com.nxtlife.efkon.license.entity.product;

import com.nxtlife.efkon.license.entity.common.BaseEntity;
import com.nxtlife.efkon.license.entity.project.product.ProjectProduct;
import com.nxtlife.efkon.license.entity.version.Version;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

@SuppressWarnings("serial")
@Entity
@Table(name = "product_detail", uniqueConstraints = {
        @UniqueConstraint(columnNames = {"product_family_id", "product_code_id", "version_id"})})
@DynamicInsert(value = true)
@DynamicUpdate(value = true)
public class ProductDetail extends BaseEntity implements Serializable {

    @ManyToOne
    private ProductCode productCode;

    @ManyToOne
    private ProductFamily productFamily;

    @ManyToOne
    private Version version;

    @Transient
    private Long tProductCodeId;


    @Transient
    private Long tProductFamilyId;


    @Transient
    private Long tVersionId;


    @OneToMany(mappedBy = "productDetail", cascade = CascadeType.ALL)
    private Set<ProjectProduct> projectProducts;

    public ProductDetail() {
        super();
    }

    public ProductDetail(Long tProductCodeId, Long tProductFamilyId, Long tVersionId) {
        super();
        if (tProductCodeId != null) {
            this.productCode = new ProductCode();
            this.productCode.setId(tProductCodeId);
        }
        if (tProductFamilyId != null) {
            this.productFamily = new ProductFamily();
            this.productFamily.setId(tProductFamilyId);
        }
        if (tVersionId != null) {
            this.version = new Version();
            this.version.setId(tVersionId);
        }
        this.tProductCodeId = tProductCodeId;
        this.tProductFamilyId = tProductFamilyId;
        this.tVersionId = tVersionId;
    }

    public ProductCode getProductCode() {
        return productCode;
    }

    public void setProductCode(ProductCode productCode) {
        this.productCode = productCode;
    }

    public ProductFamily getProductFamily() {
        return productFamily;
    }

    public void setProductFamily(ProductFamily productFamily) {
        this.productFamily = productFamily;
    }

    public Version getVersion() {
        return version;
    }

    public void setVersion(Version version) {
        this.version = version;
    }

    public Long gettProductCodeId() {
        return tProductCodeId;
    }

    public void settProductCodeId(Long tProductCodeId) {
        this.tProductCodeId = tProductCodeId;
    }

    public Long gettProductFamilyId() {
        return tProductFamilyId;
    }

    public void settProductFamilyId(Long tProductFamilyId) {
        this.tProductFamilyId = tProductFamilyId;
    }

    public Long gettVersionId() {
        return tVersionId;
    }

    public void settVersionId(Long tVersionId) {
        this.tVersionId = tVersionId;
    }

    public Set<ProjectProduct> getProjectProducts() {
        return projectProducts;
    }

    public void setProjectProducts(Set<ProjectProduct> projectProducts) {
        this.projectProducts = projectProducts;
    }

}
