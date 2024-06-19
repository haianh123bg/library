package com.haianh123.library.service;

import jakarta.mail.MessagingException;

public interface MyEmailService {
    void sendSimpleMail(String to, String subject, String content);
    void sendHtmlMail(String to, String subject, String htmlBody) throws MessagingException;
    String generateVerificationEmailContent(String verificationCode);
}
