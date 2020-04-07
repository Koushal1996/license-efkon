package com.nxtlife.efkon.license.controller;

import com.nxtlife.efkon.license.ex.ApiError;
import com.nxtlife.efkon.license.service.ProjectProductService;
import com.nxtlife.efkon.license.view.SuccessResponse;
import com.nxtlife.efkon.license.view.project.product.ProjectProductRequest;
import com.nxtlife.efkon.license.view.project.product.ProjectProductResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.ArraySchema;
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
    private ProjectProductService projectProductService;

    @PostMapping(value = "project/product", produces = {"application/json"}, consumes = {"application/json"})
    @Operation(summary = "Save product in project ", description = "return project product response after saved the products in project", tags = {
            "Project", "Project Product"})
    @ApiResponses(value = {
            @ApiResponse(description = "Project Product response after successfully saved the product in project", responseCode = "200", content = @Content(schema = @Schema(implementation = ProjectProductResponse.class))),
            @ApiResponse(description = "If user doesn't have access to save product in project", responseCode = "403", content = @Content(schema = @Schema(implementation = ApiError.class))),
            @ApiResponse(description = "If required field are not filled properly or project/product not exist", responseCode = "400", content = @Content(schema = @Schema(implementation = ApiError.class)))})
    public ProjectProductResponse save(@Valid @RequestBody ProjectProductRequest request) {

        return projectProductService.save(request);

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

        return projectProductService.update(id, request);

    }

    @GetMapping(value = "project/product", produces = {"application/json"})
    @Operation(summary = "Find all project types", description = "return a list of project types", tags = {
            "Project", "Project Type"})
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Project product  successfully fetched", content = @Content(array = @ArraySchema(schema = @Schema(implementation = ProjectProductResponse.class)))),
            @ApiResponse(responseCode = "403", description = "user don't have access to fetch project products", content = @Content(schema = @Schema(implementation = ApiError.class)))})
    public List<ProjectProductResponse> findAll() {

        return projectProductService.findAll();

    }

    @DeleteMapping(value = "project/product/{id}", produces = {"application/json"})
    @Operation(summary = "Delete product in a project ", description = "return success response after successfully deleting the product in a project", tags = {
            "Project", "Project Product"})
    @ApiResponses(value = {
            @ApiResponse(description = "product successfully deleted", responseCode = "200", content = @Content(schema = @Schema(implementation = SuccessResponse.class))),
            @ApiResponse(description = "If user doesn't have access to delete product in project", responseCode = "403", content = @Content(schema = @Schema(implementation = ApiError.class))),
            @ApiResponse(description = "If project product id incorrect", responseCode = "404", content = @Content(schema = @Schema(implementation = ApiError.class)))})
    public SuccessResponse delete(@PathVariable Long id) {
        return projectProductService.delete(id);
    }
}
