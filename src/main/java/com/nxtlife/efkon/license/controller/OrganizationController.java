package com.nxtlife.efkon.license.controller;
//package com.nxtlife.efkon.enforcementconfigurator.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.nxtlife.efkon.enforcementconfigurator.dao.OauthClientDetailsDao;
//import com.nxtlife.efkon.enforcementconfigurator.entity.oauth.OauthClientDetails;
//
//import io.swagger.v3.oas.annotations.Operation;
//import io.swagger.v3.oas.annotations.media.ArraySchema;
//import io.swagger.v3.oas.annotations.media.Content;
//import io.swagger.v3.oas.annotations.media.Schema;
//import io.swagger.v3.oas.annotations.responses.ApiResponse;
//import io.swagger.v3.oas.annotations.tags.Tag;
//
//@RestController
//@Tag(name = "Organization", description = "Organization api")
//public class OrganizationController {
//
//	@Autowired
//	private PasswordEncoder passwordEncoder;
//
//	@Autowired
//	private OauthClientDetailsDao oauthClientDetailsDao;
//
//	@PostMapping("/oauth")
//	@Operation()
//	@ApiResponse(description = "save oauth details", responseCode = "200", ref = "hjh", content = @Content(array = @ArraySchema(schema = @Schema())))
//	public OauthClientDetails saveOauthClient(OauthClientDetails oauth) {
//		System.out.println(passwordEncoder.encode("nxtlife"));
//		OauthClientDetails oauthClientDetails = new OauthClientDetails();
//		oauthClientDetails.setAccessTokenValidity(-1);
//		oauthClientDetails.setScope("read,write");
//		oauthClientDetails.setClientId("efkon-atcs");
//		oauthClientDetails.setAuthorizedGrantTypes("password");
//		oauthClientDetails.setAutoapprove("1");
//		oauthClientDetails.setClientSecret(passwordEncoder.encode("nxtlife"));
//		oauthClientDetails.setRefreshTokenValidity(-1);
//		oauthClientDetails.setResourceIds("enforcement-configurator-api");
//		return oauthClientDetailsDao.save(oauthClientDetails);
//	}
//
//}
