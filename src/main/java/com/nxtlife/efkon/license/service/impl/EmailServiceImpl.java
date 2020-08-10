package com.nxtlife.efkon.license.service.impl;

import java.io.File;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.HttpStatus;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.nxtlife.efkon.license.service.EmailService;
import com.nxtlife.efkon.license.view.SuccessResponse;

@Service
public class EmailServiceImpl implements EmailService {

	@Autowired
	public JavaMailSender emailSender;

	public String template = "This is the test email template for your email:\\r\\n\" + \"%s";

	@Override
//	@Secured(AuthorityUtils.SEND_EMAIL)
	public SuccessResponse sendSimpleMessage(String to, String subject, String text) {
		try {
			SimpleMailMessage message = new SimpleMailMessage();
			message.setTo(to);
			message.setSubject(subject);
			message.setText(text);

			emailSender.send(message);
		} catch (MailException exception) {
			exception.printStackTrace();
		}

		return new SuccessResponse(HttpStatus.OK.value(), "mail sent successfully");

	}

	@Override
//	@Secured(AuthorityUtils.SEND_EMAIL)
	public SuccessResponse sendSimpleMessageUsingTemplate(String to, String subject, String templateArgs) {
		String text = String.format(template, templateArgs);
		sendSimpleMessage(to, subject, text);

		return new SuccessResponse(HttpStatus.OK.value(), "mail sent successfully");

	}

	@Override
//	@Secured(AuthorityUtils.SEND_EMAIL)
	public SuccessResponse sendMessageWithAttachment(String to, String subject, String text, String pathToAttachment) {

		try {
			MimeMessage message = emailSender.createMimeMessage();
			// pass 'true' to the constructor to create a multipart message
			MimeMessageHelper helper = new MimeMessageHelper(message, true);

			helper.setTo(to);
			helper.setSubject(subject);
			helper.setText(text);

			FileSystemResource file = new FileSystemResource(new File(pathToAttachment));
			helper.addAttachment(file.getFilename(), file);

			emailSender.send(message);
		} catch (MessagingException e) {
			e.printStackTrace();
		}

		return new SuccessResponse(HttpStatus.OK.value(), "mail sent successfully");

	}

}
