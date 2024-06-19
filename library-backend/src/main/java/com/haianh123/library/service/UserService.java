package com.haianh123.library.service;

import com.haianh123.library.dto.request.UserCreateRequest;
import com.haianh123.library.dto.response.UserResponse;
import com.haianh123.library.entity.User;
import jakarta.mail.MessagingException;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService {

    UserResponse register(UserCreateRequest request) throws MessagingException;

    boolean accountVerify(String request, String email);

    User findByEmail(String email);

}
