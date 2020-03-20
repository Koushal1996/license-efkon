package com.nextlife.license.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nxtlife.efkon.license.entity.ProductCode;
import com.nxtlife.efkon.license.repository.ProductCodeRepo;

@Service
public class ProductCodeService {

	@Autowired
	public ProductCodeRepo productCoderepo;

	public ProductCode saveProductCode() {

		return null;

	}

	public List<ProductCode> getAllProductCode() {

		return null;

	}

}
