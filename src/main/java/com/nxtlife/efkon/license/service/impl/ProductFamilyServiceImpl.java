package com.nxtlife.efkon.license.service.impl;

import com.nxtlife.efkon.license.dao.jpa.ProductCodeJpaDao;
import com.nxtlife.efkon.license.dao.jpa.ProductFamilyJpaDao;
import com.nxtlife.efkon.license.entity.product.ProductCode;
import com.nxtlife.efkon.license.entity.product.ProductFamily;
import com.nxtlife.efkon.license.service.ProductFamilyService;
import com.nxtlife.efkon.license.view.product.ProductFamilyRequest;
import com.nxtlife.efkon.license.view.product.ProductFamilyResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

import static com.sun.xml.internal.ws.api.message.Packet.Status.Request;

@Service("productFamilyServiceImpl")
@Transactional
public class ProductFamilyServiceImpl implements ProductFamilyService {

    @Autowired
    private ProductFamilyJpaDao productFamilyDao;

    @Autowired
    private ProductCodeJpaDao productCodeDao;


    public void validate(ProductFamilyRequest request) {

    }

    public ProductFamilyResponse save(ProductFamilyRequest productFamilyRequest) {

        ProductFamily productFamily;
        validate(productFamilyRequest);
        productFamily = productFamilyRequest.toEntity();

        return null;
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
