package com.nxtlife.efkon.license.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nxtlife.efkon.license.ex.ApiError;
import com.nxtlife.efkon.license.service.VersionService;
import com.nxtlife.efkon.license.view.version.VersionRequest;
import com.nxtlife.efkon.license.view.version.VersionResponse;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@Tag(name = "Version", description = "version api's for save,fetch,update and delete the version")
@RequestMapping("/api/")
public class VersionController {

	@Autowired
	public VersionService versionService;

	@GetMapping(value = "versions", produces = { "application/json" })
	@Operation(summary = "Find all versions", description = "return list of versions ", tags = { "Version" })
	@ApiResponses(value = {
			@ApiResponse(description = "versions successfully fetched", responseCode = "200", content = @Content(array = @ArraySchema(schema = @Schema(implementation = VersionResponse.class)))),
			@ApiResponse(description = "If user doesn't have access to fetch list of versions", responseCode = "403", content = @Content(schema = @Schema(implementation = ApiError.class))) })
	public List<VersionResponse> findAll() {
		return versionService.findAll();
	}

	@PostMapping(value = "version", consumes = { "application/json" }, produces = { "application/json" })
	@Operation(summary = "Save version ", description = "return version info after saving version details", tags = {
			"Version" })
	@ApiResponses(value = {
			@ApiResponse(description = "Version response after successfully saved the product family", responseCode = "200", content = @Content(schema = @Schema(implementation = VersionResponse.class))),
			@ApiResponse(description = "If user doesn't have access to save version", responseCode = "403", content = @Content(schema = @Schema(implementation = ApiError.class))),
			@ApiResponse(description = "If required field are not filled or version already exist", responseCode = "400", content = @Content(schema = @Schema(implementation = ApiError.class))) })
	public VersionResponse saveVersion(@Valid @RequestBody VersionRequest versionRequest) {
		return versionService.save(versionRequest);
	}

}
