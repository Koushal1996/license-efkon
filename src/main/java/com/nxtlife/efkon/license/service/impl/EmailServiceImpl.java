package com.nxtlife.efkon.license.service.impl;

import java.io.File;
import java.io.IOException;

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
import com.sendgrid.Method;
import com.sendgrid.Request;
import com.sendgrid.Response;
import com.sendgrid.SendGrid;
import com.sendgrid.helpers.mail.Mail;
import com.sendgrid.helpers.mail.objects.Content;
import com.sendgrid.helpers.mail.objects.Email;

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

	public SuccessResponse sendEmail() throws IOException {
		Email from = new Email("test@example.com");
		String subject = "Sending with Twilio SendGrid is Fun";
		Email to = new Email("test@example.com");
		Content content = new Content("text/plain", "and easy to do anywhere, even with Java");
		Mail mail = new Mail(from, subject, to, content);

		SendGrid sg = new SendGrid(System.getenv("SENDGRID_API_KEY"));
		Request request = new Request();
		try {
			request.setMethod(Method.POST);
			request.setEndpoint("mail/send");
			request.setBody(mail.build());
			Response response = sg.api(request);
			System.out.println(response.getStatusCode());
			System.out.println(response.getBody());
			System.out.println(response.getHeaders());
		} catch (IOException ex) {
			throw ex;
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
