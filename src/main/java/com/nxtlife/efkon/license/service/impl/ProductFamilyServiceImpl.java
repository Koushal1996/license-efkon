package com.nxtlife.efkon.license.service.impl;

import com.nxtlife.efkon.license.dao.jpa.ProductCodeJpaDao;
import com.nxtlife.efkon.license.dao.jpa.ProductFamilyJpaDao;
import com.nxtlife.efkon.license.entity.product.ProductCode;
import com.nxtlife.efkon.license.entity.product.ProductFamily;
import com.nxtlife.efkon.license.ex.ValidationException;
import com.nxtlife.efkon.license.service.ProductFamilyService;
import com.nxtlife.efkon.license.view.product.ProductFamilyRequest;
import com.nxtlife.efkon.license.view.product.ProductFamilyResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service("productFamilyServiceImpl")
@Transactional
public class ProductFamilyServiceImpl implements ProductFamilyService {

    @Autowired
    private ProductFamilyJpaDao productFamilyDao;

    @Autowired
    private ProductCodeJpaDao productCodeDao;


    public void validate(ProductFamilyRequest request) {
        Set<String> existProductCodes = new HashSet<>();
        if (productFamilyDao.existsByName(request.getName())) {
            throw new ValidationException(String.format("Product family (%s) already exist", request.getName()));
        }
        List<String> productCodes = productCodeDao.findAllNames();
        for (String code : request.getProductCodes()) {
            if (productCodes.contains(code)) {
                existProductCodes.add(code);
            }
        }
        if (!existProductCodes.isEmpty()) {
            throw new ValidationException(String.format("Some of the product codes (%s) already exist", existProductCodes));
        }


    }

    public ProductFamilyResponse save(ProductFamilyRequest productFamilyRequest) {

        ProductFamily productFamily;
        Set<ProductCode> productCodes = new HashSet<>();
        validate(productFamilyRequest);
        productFamily = productFamilyRequest.toEntity();
        for (String code : productFamilyRequest.getProductCodes()) {
            productCodes.add(new ProductCode(code, productFamily));
        }
        productFamily.setProductCodes(productCodes);
        productFamily = productFamilyDao.save(productFamily);
        return new ProductFamilyResponse(productFamily);

    }

    public List<ProductFamilyResponse> findAll() {
        return productFamilyDao.findAll().stream().map(ProductFamilyResponse::new).collect(Collectors.toList());

    }

}
