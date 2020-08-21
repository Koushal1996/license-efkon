package com.nxtlife.efkon.license.util;

import java.io.IOException;
import java.util.List;

import org.springframework.http.HttpStatus;

import com.nxtlife.efkon.license.view.SuccessResponse;
import com.sendgrid.Method;
import com.sendgrid.Request;
import com.sendgrid.Response;
import com.sendgrid.SendGrid;
import com.sendgrid.helpers.mail.Mail;
import com.sendgrid.helpers.mail.objects.Content;
import com.sendgrid.helpers.mail.objects.Email;

public class MailUtil {

	public static SuccessResponse sendEmail(String senderGridAPIKey, String fromEmailId, String toEmailId,
			List<String> ccEmailIds, String subject, Content content) throws IOException {
		Email from = new Email(fromEmailId);
		Email to = new Email(toEmailId);
		Mail mail = new Mail(from, subject, to, content);
		SendGrid sg = new SendGrid(senderGridAPIKey);
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

}
