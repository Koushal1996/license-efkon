package com.nxtlife.efkon.license.controller;

import java.util.List;

import com.nxtlife.efkon.license.entity.project.product.ProjectProduct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.nxtlife.efkon.license.service.ProjectProductService;

@RestController
public class ProjectProductController {

    @Autowired
    ProjectProductService productService;

    @PostMapping("projectproduct")
    public void saveProjectProduct(@RequestBody ProjectProduct projectProduct) {

        productService.saveProjectProduct(projectProduct);

    }

    @GetMapping("projectproduct")
    public List<ProjectProduct> getAllProject() {

        return productService.getAllProjectProduct();

    }
}
