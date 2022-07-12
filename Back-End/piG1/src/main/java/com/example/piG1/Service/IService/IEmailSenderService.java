package com.example.piG1.Service.IService;

import javax.mail.MessagingException;
import java.io.UnsupportedEncodingException;
import java.util.Map;

public interface IEmailSenderService {
    void sendSimpleMessage(String to, String subject, String text);
    void sendHtmlMessage(String to, String subject, String htmlBody) throws MessagingException, UnsupportedEncodingException;
    void sendWelcomeTemplate(String to, String subject, Map<String, Object> templateModel) throws MessagingException, UnsupportedEncodingException;
    void sendBookingConfirmation(String to, String subject, Map<String, Object> templateModel) throws MessagingException, UnsupportedEncodingException;
}
