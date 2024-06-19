package com.haianh123.library.service.impl;

import com.haianh123.library.service.MyEmailService;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class MyEmailServiceImpl implements MyEmailService {
    @Autowired
    private JavaMailSender javaMailSender;

    @Override
    public void sendSimpleMail(String to, String subject, String content) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject(subject);
        message.setText(content);
        javaMailSender.send(message);
    }

    @Override
    public void sendHtmlMail(String to, String subject, String htmlBody) throws MessagingException {
        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);

        helper.setTo(to);
        helper.setSubject(subject);
        helper.setText(htmlBody, true);

        javaMailSender.send(message);
    }

    @Override
    public String generateVerificationEmailContent(String verificationCode) {
        return "<!DOCTYPE html>"
                + "<html>"
                + "<head>"
                + "<style>"
                + "body {font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4;}"
                + ".container {max-width: 600px; margin: 20px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);}"
                + ".header {background-color: #007bff; color: white; padding: 10px 20px; text-align: center; border-top-left-radius: 8px; border-top-right-radius: 8px;}"
                + ".content {margin: 20px; text-align: center;}"
                + ".content p {font-size: 16px; line-height: 1.5;}"
                + ".verification-code {font-size: 24px; font-weight: bold; color: #007bff; margin: 20px 0;}"
                + ".footer {background-color: #f1f1f1; text-align: center; padding: 10px; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;}"
                + "</style>"
                + "</head>"
                + "<body>"
                + "<div class='container'>"
                + "<div class='header'><h1>Email Verification</h1></div>"
                + "<div class='content'>"
                + "<p>Dear User,</p>"
                + "<p>Thank you for registering with our service. Please use the following verification code to complete your registration:</p>"
                + "<div class='verification-code'>" + verificationCode + "</div>"
                + "<p>If you did not request this verification, please ignore this email.</p>"
                + "</div>"
                + "<div class='footer'><p>Contact us: support@example.com</p></div>"
                + "</div>"
                + "</body>"
                + "</html>";
    }
}
