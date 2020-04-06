package com.nxtlife.efkon.license.view.product;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.nxtlife.efkon.license.entity.product.ProductFamily;
import com.nxtlife.efkon.license.view.Response;

import io.swagger.v3.oas.annotations.media.Schema;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
public class ProductFamilyResponse implements Response {

	@Schema(description = "Id of the product family")
	private Long id;

    @Schema(description = "Name of the product family")
    private String name;

    private List<ProductCodeResponse> productCodes;


    public ProductFamilyResponse(Long id, String name) {
        super();
        this.id = id;
        this.name = name;
    }


    public Long getId() {
        return mask(id);
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<ProductCodeResponse> getProductCodes() {
        return productCodes;
    }

    public void setProductCodes(List<ProductCodeResponse> productCodes) {
        this.productCodes = productCodes;
    }

    public static ProductFamilyResponse get(ProductFamily productFamily) {
        if (productFamily != null) {
            ProductFamilyResponse response = new ProductFamilyResponse(productFamily.getId(), productFamily.getName());
            return response;
        }
        return null;

    }

}
