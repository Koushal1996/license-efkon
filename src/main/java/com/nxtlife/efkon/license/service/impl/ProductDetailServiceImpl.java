package com.nxtlife.efkon.license.service.impl;

import com.nxtlife.efkon.license.dao.jpa.ProductCodeJpaDao;
import com.nxtlife.efkon.license.dao.jpa.ProductDetailJpaDao;
import com.nxtlife.efkon.license.dao.jpa.ProductFamilyJpaDao;
import com.nxtlife.efkon.license.dao.jpa.VersionJpaDao;
import com.nxtlife.efkon.license.entity.product.ProductDetail;
import com.nxtlife.efkon.license.ex.ValidationException;
import com.nxtlife.efkon.license.service.BaseService;
import com.nxtlife.efkon.license.service.ProductDetailService;
import com.nxtlife.efkon.license.view.product.ProductCodeResponse;
import com.nxtlife.efkon.license.view.product.ProductDetailRequest;
import com.nxtlife.efkon.license.view.product.ProductDetailResponse;
import com.nxtlife.efkon.license.view.product.ProductFamilyResponse;
import com.nxtlife.efkon.license.view.version.VersionResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service("productDetailServiceImpl")
@Transactional
public class ProductDetailServiceImpl extends BaseService implements ProductDetailService {

    @Autowired
    public ProductDetailJpaDao productDetailDao;

    @Autowired
    public ProductFamilyJpaDao productFamilyDao;

    @Autowired
    public ProductCodeJpaDao productCodeDao;

    @Autowired
    public VersionJpaDao versionDao;

    public void validate(ProductDetailRequest request) {
        if (!productFamilyDao.existsByIdAndActive(request.getProductFamilyId(), true)) {
            throw new ValidationException(String.format("Product family (%s) not exist", mask(request.getProductFamilyId())));
        }
        if (!productCodeDao.existsByIdAndProductFamilyIdAndActive(request.getProductCodeId(), request.getProductFamilyId(), true)) {
            throw new ValidationException(String.format("This Product code (%s) not exist for product family (%s)",
                    mask(request.getProductCodeId()), mask(request.getProductFamilyId())));
        }
        if (!versionDao.existsByIdAndActive(request.getVersionId(), true)) {
            throw new ValidationException(String.format("Version (%s) not exist", mask(request.getVersionId())));
        }
        if (productDetailDao.existsByProductFamilyIdAndProductCodeIdAndVersionIdAndActive(request.getProductFamilyId(),
                request.getProductCodeId(), request.getVersionId(), true)) {
            throw new ValidationException(String.format("This product family (%s), product code (%s) and Version (%s) already exist",
                    mask(request.getProductFamilyId()), mask(request.getProductCodeId()), mask(request.getVersionId())));
        }
    }

    public List<ProductDetailResponse> getProductDetail() {
        List<ProductDetailResponse> productDetailResponseList = new ArrayList<>();
        List<ProductDetail> productDetails = productDetailDao.findAllByActive(true);
        productDetails.forEach(detail ->
        {
            ProductDetailResponse response = new ProductDetailResponse(detail.getId());
            response.setProductFamily(ProductFamilyResponse.get(detail.getProductFamily()));
            response.setProductCode(ProductCodeResponse.get(detail.getProductCode()));
            response.setVersion(VersionResponse.get(detail.getVersion()));
            productDetailResponseList.add(response);
        });
        return productDetailResponseList;
    }

    public ProductDetailResponse save(ProductDetailRequest request) {
        validate(request);
        ProductDetail productDetail = productDetailDao.save(new ProductDetail(request.getProductCodeId(),
                request.getProductFamilyId(), request.getVersionId()));
        ProductDetailResponse response = ProductDetailResponse.get(productDetail);
        response.setProductFamily(productFamilyDao.findResponseById(request.getProductFamilyId()));
        response.setProductCode(productCodeDao.findResponseById(request.getProductCodeId()));
        response.setVersion(versionDao.findResponseById(request.getVersionId()));
        return response;
    }

}
