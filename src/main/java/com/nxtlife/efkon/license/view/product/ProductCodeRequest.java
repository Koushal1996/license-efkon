package com.nxtlife.efkon.license.view.product;

import com.nxtlife.efkon.license.entity.product.ProductCode;
import com.nxtlife.efkon.license.view.Request;
import io.swagger.v3.oas.annotations.media.Schema;

import javax.validation.constraints.NotEmpty;

public class ProductCodeRequest implements Request {
    @Schema(description = "Id of the product code")
    private Long id;

    @Schema(description = "Name of the product code")
    @NotEmpty(message = "name can't be empty")
    private String name;
    
    public ProductCode toEntity() {
    	ProductCode productCode =new ProductCode();
    	productCode.setId(this.getId());
    	return productCode;
    }

    public Long getId() {
        return unmask(id);
    }

    public String getName() {
        return name;
    }
}
