package com.nxtlife.efkon.license.controller;

import com.nxtlife.efkon.license.entity.project.product.ProjectProduct;
import com.nxtlife.efkon.license.ex.ApiError;
import com.nxtlife.efkon.license.service.ProjectProductService;
import com.nxtlife.efkon.license.view.project.product.ProjectProductRequest;
import com.nxtlife.efkon.license.view.project.product.ProjectProductResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@Tag(name = "Project Product", description = "Project product api's for fetch,save,update and delete the products")
@RequestMapping("/api/")
public class ProjectProductController {

    @Autowired
    private ProjectProductService productService;

    @PostMapping(value = "project/product", produces = {"application/json"}, consumes = {"application/json"})
    @Operation(summary = "Save product in project ", description = "return project product response after saved the products in project", tags = {
            "Project", "Project Product"})
    @ApiResponses(value = {
            @ApiResponse(description = "Project Product response after successfully saved the product in project", responseCode = "200", content = @Content(schema = @Schema(implementation = ProjectProductResponse.class))),
            @ApiResponse(description = "If user doesn't have access to save product in project", responseCode = "403", content = @Content(schema = @Schema(implementation = ApiError.class))),
            @ApiResponse(description = "If required field are not filled properly or project/product not exist", responseCode = "400", content = @Content(schema = @Schema(implementation = ApiError.class)))})
    public ProjectProductResponse save(@Valid @RequestBody ProjectProductRequest request) {

       return productService.save(request);

    }

    @PutMapping(value = "project/product/{id}", produces = {"application/json"}, consumes = {"application/json"})
    @Operation(summary = "update product and license detail ", description = "return project product response after updated details", tags = {
            "Project", "Project Product"})
    @ApiResponses(value = {
            @ApiResponse(description = "Project Product response after successfully update the product details in project", responseCode = "200", content = @Content(schema = @Schema(implementation = ProjectProductResponse.class))),
            @ApiResponse(description = "If user doesn't have access to update product details in project", responseCode = "403", content = @Content(schema = @Schema(implementation = ApiError.class))),
            @ApiResponse(description = "If project product id is incorrect", responseCode = "404", content = @Content(schema = @Schema(implementation = ApiError.class))),
            @ApiResponse(description = "If required field are not filled properly or project/product not exist", responseCode = "400", content = @Content(schema = @Schema(implementation = ApiError.class)))})
    public ProjectProductResponse update(@PathVariable Long id, @RequestBody ProjectProductRequest request) {

        return productService.update(id,request);

    }




    @GetMapping("projectproduct")
    public List<ProjectProduct> getAllProject() {

        return productService.getAllProjectProduct();

    }
}
