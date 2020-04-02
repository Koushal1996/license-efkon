package com.nxtlife.efkon.license.service.impl;

import com.nxtlife.efkon.license.dao.jpa.ProductCodeJpaDao;
import com.nxtlife.efkon.license.dao.jpa.ProductFamilyJpaDao;
import com.nxtlife.efkon.license.entity.product.ProductCode;
import com.nxtlife.efkon.license.entity.product.ProductFamily;
import com.nxtlife.efkon.license.ex.NotFoundException;
import com.nxtlife.efkon.license.ex.ValidationException;
import com.nxtlife.efkon.license.service.BaseService;
import com.nxtlife.efkon.license.service.ProductFamilyService;
import com.nxtlife.efkon.license.view.product.ProductCodeRequest;
import com.nxtlife.efkon.license.view.product.ProductFamilyRequest;
import com.nxtlife.efkon.license.view.product.ProductFamilyResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service("productFamilyServiceImpl")
@Transactional
public class ProductFamilyServiceImpl extends BaseService implements ProductFamilyService {

    private static Logger logger = LoggerFactory.getLogger(ProductFamilyServiceImpl.class);

    @Autowired
    private ProductFamilyJpaDao productFamilyDao;

    @Autowired
    private ProductCodeJpaDao productCodeDao;

    public void validate(ProductFamilyRequest request) {
        if (productFamilyDao.existsByName(request.getName())) {
            throw new ValidationException(String.format("Product family (%s) already exist", request.getName()));
        }
        request.getProductCodes().stream().forEach(codeRequest -> {
            if (codeRequest.getId() == null && productCodeDao.existsByName(codeRequest.getName())) {
                throw new ValidationException(String.format("Project code (%s) already exist", codeRequest.getName()));
            }
        });
    }


    public ProductFamilyResponse save(ProductFamilyRequest request) {

        ProductFamily productFamily;
        Set<ProductCode> productCodes = new HashSet<>();
        validate(request);
        productFamily = request.toEntity();
        for (ProductCodeRequest codeRequest : request.getProductCodes()) {
            productCodes.add(new ProductCode(codeRequest.getName(), productFamily));
        }
        productFamily.setProductCodes(productCodes);
        productFamilyDao.save(productFamily);
        ProductFamilyResponse response = productFamilyDao.findResponseById(productFamily.getId());
        response.setProductCodes(productCodeDao.findByProductFamilyIdAndActive(productFamily.getId(), true));
        return response;

    }

    public List<ProductFamilyResponse> findAll() {
        List<ProductFamilyResponse> productFamilies = productFamilyDao.findByActive(true);
        productFamilies.stream().forEach(productFamily ->
                productFamily.setProductCodes(productCodeDao.findByProductFamilyIdAndActive(unmask(productFamily.getId()), true)));
        return productFamilies;
    }

    public ProductFamilyResponse update(Long id, ProductFamilyRequest request) {

        Long unmaskId = unmask(id);
        if (!productFamilyDao.existsById(unmaskId)) {
            throw new NotFoundException(String.format("Product Family (%s) not found", id));
        }
        validate(request);
        List<Long> productFamilyCodeIds = productCodeDao.findAllIdsByProductFamilyIdAndActive(unmaskId, true);
        for (ProductCodeRequest codeRequest : request.getProductCodes()) {
            ProductCode productcode;
            String codeName;
            if (codeRequest.getId() == null) {
                productcode = new ProductCode(codeRequest.getName());
                productcode.settProductFamilyId(unmaskId);
                productCodeDao.save(productcode);
            } else {
                codeName = productCodeDao.findNameById(codeRequest.getId());
                if (!codeRequest.getName().equals(codeName))
                    productCodeDao.updateNameById(codeRequest.getName(), codeRequest.getId(), getUserId(), new Date());
                productFamilyCodeIds.remove(codeRequest.getId());
            }
        }
        if (!productFamilyCodeIds.isEmpty()) {
            productCodeDao.deleteByIds(productFamilyCodeIds, getUserId(), new Date());
        }
        if (request.getName() != null) {
            int rows = productFamilyDao.updateNameById(request.getName(), unmaskId, getUserId(), new Date());
            if (rows > 0) {
                logger.info("Product family {} updated successfully", unmaskId);
            }
        }

        ProductFamilyResponse response = productFamilyDao.findResponseById(unmaskId);
        response.setProductCodes(productCodeDao.findByProductFamilyIdAndActive(unmaskId, true));
        return response;


    }
}
