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

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

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
        productFamilyDao.save(productFamily);
        ProductFamilyResponse productFamilyResponse = productFamilyDao.findResponseById(productFamily.getId());
        productFamilyResponse.setProductCodes(productCodeDao.findByProductFamilyId(productFamily.getId()));
        return productFamilyResponse;

    }

    public List<ProductFamilyResponse> findAll() {

        List<ProductFamilyResponse> productFamilies = new ArrayList<>();
        productFamilyDao.findAll().stream().forEach(productFamily -> productFamilies.add(new ProductFamilyResponse(productFamily.getId(),
                productFamily.getName())));
        for (ProductFamilyResponse productFamily : productFamilies) {
            productFamily.setProductCodes(productCodeDao.findByProductFamilyId(productFamily.getId()));
        }
        return productFamilies;

    }

}
