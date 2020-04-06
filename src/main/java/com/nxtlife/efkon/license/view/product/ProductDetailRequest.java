package com.nxtlife.efkon.license.view.product;

import com.nxtlife.efkon.license.view.Request;
import io.swagger.v3.oas.annotations.media.Schema;

import javax.validation.constraints.NotNull;

public class ProductDetailRequest implements Request {

    @Schema(description = "Id of the product family", example = "1", required = true)
    @NotNull(message = "product family id can't be null")
    private Long productFamilyId;

    @Schema(description = "Id of the product code", example = "1", required = true)
    @NotNull(message = "product code id can't be null")
    private Long productCodeId;

    @Schema(description = "Id of the version", example = "1", required = true)
    @NotNull(message = "version id can't be null")
    private Long versionId;

    public Long getProductFamilyId() {
        return unmask(productFamilyId);
    }

    public Long getProductCodeId() {
        return unmask(productCodeId);
    }

    public Long getVersionId() {
        return unmask(versionId);
    }
}
