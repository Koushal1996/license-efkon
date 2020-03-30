package com.nxtlife.efkon.license.service;


import com.nxtlife.efkon.license.view.product.ProductFamilyRequest;
import com.nxtlife.efkon.license.view.product.ProductFamilyResponse;

import java.util.List;

public interface ProductFamilyService {


    public ProductFamilyResponse save(ProductFamilyRequest productFamilyRequest);

    public List<ProductFamilyResponse> findAll();
}
