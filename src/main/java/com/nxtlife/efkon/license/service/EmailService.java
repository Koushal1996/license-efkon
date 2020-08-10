package com.nxtlife.efkon.license.service;

import com.nxtlife.efkon.license.view.SuccessResponse;

public interface EmailService {

	public SuccessResponse sendSimpleMessage(String to, String subject, String text);

	public SuccessResponse sendSimpleMessageUsingTemplate(String to, String subject, String templateArgs);

	public SuccessResponse sendMessageWithAttachment(String to, String subject, String text, String pathToAttachment);
}
