package com.nxtlife.efkon.license.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nxtlife.efkon.license.ex.ApiError;
import com.nxtlife.efkon.license.service.impl.EmailServiceImpl;
import com.nxtlife.efkon.license.util.MailUtil;
import com.nxtlife.efkon.license.view.SuccessResponse;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@Tag(name = "Mail", description = "Mail api's for send mails")
@RequestMapping("/api/mail")
public class EmailController {

	@Value("${attachment.invoice}")
	private String attachmentPath;

	@Autowired
	public EmailServiceImpl emailService;

	@PostMapping("/send")
	@Operation(summary = "send simple email ", description = "return success response after successfully sending email", tags = {
			"Email" })
	@ApiResponses(value = {
			@ApiResponse(description = "email successfully sent", responseCode = "200", content = @Content(schema = @Schema(implementation = SuccessResponse.class))),
			@ApiResponse(description = "If user doesn't have access to send email", responseCode = "403", content = @Content(schema = @Schema(implementation = ApiError.class))) })
	public SuccessResponse createMail(@ModelAttribute("mail") @Valid MailUtil mail) {

		return emailService.sendSimpleMessage(mail.getTo(), mail.getSubject(), mail.getText());

	}

	@PostMapping("/sendTemplate")
	@Operation(summary = "send email with template", description = "return success response after successfully sending email", tags = {
			"Email" })
	@ApiResponses(value = {
			@ApiResponse(description = "email successfully sent", responseCode = "200", content = @Content(schema = @Schema(implementation = SuccessResponse.class))),
			@ApiResponse(description = "If user doesn't have access to send email", responseCode = "403", content = @Content(schema = @Schema(implementation = ApiError.class))) })
	public SuccessResponse createMailWithTemplate(@ModelAttribute("mail") @Valid MailUtil mail) {
		return emailService.sendSimpleMessageUsingTemplate(mail.getTo(), mail.getSubject(), mail.getText());
	}

	@PostMapping(value = "/sendAttachment")
	@Operation(summary = "send email with attachment", description = "return success response after successfully sending email", tags = {
			"Email" })
	@ApiResponses(value = {
			@ApiResponse(description = "email successfully sent", responseCode = "200", content = @Content(schema = @Schema(implementation = SuccessResponse.class))),
			@ApiResponse(description = "If user doesn't have access to send email", responseCode = "403", content = @Content(schema = @Schema(implementation = ApiError.class))) })
	public SuccessResponse createMailWithAttachment(@ModelAttribute("mail") @Valid MailUtil mail) {

		return emailService.sendMessageWithAttachment(mail.getTo(), mail.getSubject(), mail.getText(), attachmentPath);

	}

}
