//package com.nxtlife.efkon.license.controller;
//
//import java.util.List;
//
//import javax.validation.Valid;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.nxtlife.efkon.license.ex.ApiError;
//import com.nxtlife.efkon.license.service.LicenseService;
//import com.nxtlife.efkon.license.view.license.LicenseRequest;
//import com.nxtlife.efkon.license.view.license.LicenseResponse;
//
//import io.swagger.v3.oas.annotations.Operation;
//import io.swagger.v3.oas.annotations.media.ArraySchema;
//import io.swagger.v3.oas.annotations.media.Content;
//import io.swagger.v3.oas.annotations.media.Schema;
//import io.swagger.v3.oas.annotations.responses.ApiResponse;
//import io.swagger.v3.oas.annotations.responses.ApiResponses;
//import io.swagger.v3.oas.annotations.tags.Tag;
//
//@RestController
//@Tag(name = "License", description = "License api's for fetch,save,update and delete the license")
//@RequestMapping("/api/")
//public class LicenseController {
//
//	@Autowired
//	private LicenseService licenseService;
//
//	@PostMapping(value = "license", produces = { "application/json" }, consumes = { "application/json" })
//	@Operation(summary = "Save license in project product", description = "return license response after saved the license in project product ", tags = {
//			"Project Product", "License" })
//	@ApiResponses(value = {
//			@ApiResponse(description = "License response after successfully saved the license in project product", responseCode = "200", content = @Content(schema = @Schema(implementation = LicenseResponse.class))),
//			@ApiResponse(description = "If user doesn't have access to save license in project product", responseCode = "403", content = @Content(schema = @Schema(implementation = ApiError.class))),
//			@ApiResponse(description = "If required field are not filled properly or project product not exist", responseCode = "400", content = @Content(schema = @Schema(implementation = ApiError.class))) })
//	public LicenseResponse save(@Valid @RequestBody LicenseRequest request) {
//
//		return licenseService.save(request);
//
//	}
//
//	@GetMapping(value = "licenses", produces = { "application/json" })
//	@Operation(summary = "Find all license", description = "return a list of license", tags = { "Project Product",
//			"License" })
//	@ApiResponses(value = {
//			@ApiResponse(responseCode = "200", description = "License successfully fetched", content = @Content(array = @ArraySchema(schema = @Schema(implementation = LicenseResponse.class)))),
//			@ApiResponse(responseCode = "403", description = "user don't have access to fetch license", content = @Content(schema = @Schema(implementation = ApiError.class))) })
//	public List<LicenseResponse> findAll() {
//
//		return licenseService.findAll();
//
//	}
//}
