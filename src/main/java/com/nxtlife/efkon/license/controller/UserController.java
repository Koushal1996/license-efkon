package com.nxtlife.efkon.license.controller;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.oauth2.common.OAuth2AccessToken;
import org.springframework.security.oauth2.provider.token.TokenStore;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nxtlife.efkon.license.ex.ApiError;
import com.nxtlife.efkon.license.service.UserService;
import com.nxtlife.efkon.license.view.SuccessResponse;
import com.nxtlife.efkon.license.view.user.UserResponse;
import com.nxtlife.efkon.license.view.user.security.PasswordRequest;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@Tag(name = "User", description = "User api's for fetch, create, delete user, password change and logout")
@RequestMapping("/api/")
public class UserController {

	@Autowired
	private UserService userService;
	
	@Autowired
	private TokenStore tokenStore;

	@GetMapping(produces = { "application/json" }, value = "me")
	@Operation(summary = "Find login user info", description = "return user info using access token detail", tags = {
			"User" })
	@ApiResponses(value = {
			@ApiResponse(description = "User info successfully fetched", responseCode = "200", content = @Content(schema = @Schema(implementation = UserResponse.class))),
			@ApiResponse(description = "If token is not valid", responseCode = "404", content = @Content(schema = @Schema(implementation = ApiError.class))) })
	public UserResponse find() {
		return userService.findByAuthentication();
	}

	@PutMapping(value = "/me/password", produces = { "application/json" }, consumes = { "application/json" })
	@Operation(summary = "Change user password using old password", description = "This api used to change password using old password", tags = {
			"User" })
	@ApiResponses(value = {
			@ApiResponse(description = "Success message", responseCode = "200", content = @Content(schema = @Schema(implementation = SuccessResponse.class))),
			@ApiResponse(description = "If user not found with password", responseCode = "404", content = @Content(schema = @Schema(implementation = ApiError.class))),
			@ApiResponse(description = "If old password is not correct", responseCode = "400", content = @Content(schema = @Schema(implementation = ApiError.class))) })
	public SuccessResponse changePassword(@Valid @RequestBody PasswordRequest request) {
		return userService.changePassword(request);
	}

	@GetMapping(produces = { "application/json" }, value = "/me/logout")
	@Operation(summary = "Logout", description = "This api used to logout", tags = { "User", "Logout" })
	@ApiResponses(value = {
			@ApiResponse(description = "Success message", responseCode = "200", content = @Content(schema = @Schema(implementation = SuccessResponse.class))) })
	public SuccessResponse logout(HttpServletRequest request) {
		String authHeader = request.getHeader("Authorization");
		if (authHeader != null) {
			String tokenValue = authHeader.replace("Bearer", "").trim();
			OAuth2AccessToken accessToken = tokenStore.readAccessToken(tokenValue);
			tokenStore.removeAccessToken(accessToken);
		}
		return new SuccessResponse(HttpStatus.OK.value(), "Logout successfully");
	}

}
