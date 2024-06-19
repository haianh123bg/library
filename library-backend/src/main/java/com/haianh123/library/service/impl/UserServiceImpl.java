package com.haianh123.library.service.impl;

import com.haianh123.library.dto.request.UserCreateRequest;
import com.haianh123.library.dto.response.UserResponse;
import com.haianh123.library.entity.User;
import com.haianh123.library.exception.AppException;
import com.haianh123.library.exception.ErrorCode;
import com.haianh123.library.mapper.UserMapper;
import com.haianh123.library.repository.UserRepository;
import com.haianh123.library.service.MyEmailService;
import com.haianh123.library.service.UserService;
import com.haianh123.library.utils.Role;
import jakarta.mail.MessagingException;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class UserServiceImpl implements UserService {
    MyEmailService myEmailService;
    UserRepository userRepository;
    UserMapper userMapper;
    PasswordEncoder passwordEncoder;

    @Override
    public UserResponse register(UserCreateRequest request) throws MessagingException {
        // Kiểm tra xem userAccountName có tồn tại rồi hay không
        if(userRepository.existsByUserAccountName(request.getUserAccountName())){
            throw new AppException(ErrorCode.USER_EXISTED);
        }
        User user = userMapper.toUser(request);
        // Xét role USER
        user.setUserRole(Role.USER.name());
        user.setUserAccountPassword(passwordEncoder.encode(user.getUserAccountPassword()));

        // Xét active = false
        user.setUserActive(false);

        // Sinh ngẫu nhiên keyactive
        int code = (int) Math.floor(((Math.random() * 8999) + 1000));
        String keyActive = code + "";
        user.setKeyActive(keyActive);

        //Gửi email
        myEmailService.sendHtmlMail(user.getUserAccountName(),
                "Account confirmation code",
                myEmailService.generateVerificationEmailContent(user.getKeyActive()));


        return userMapper.toUserResponse(userRepository.save(user));
    }

    @Override
    public boolean accountVerify(String request, String email) {
        User user = userRepository.findByUserAccountName(email).orElseThrow(
                () -> new AppException(ErrorCode.USER_NOT_EXISTED)
        );

        if (!request.equals(user.getKeyActive())){
            throw new AppException(ErrorCode.WRONG_VERIFY_KEYACTIVE);
        }

        user.setUserActive(true);
        User userUpdate = userRepository.save(user);

        return true;
    }

    @Override
    public User findByEmail(String email) {
        return userRepository.findByUserAccountName(email).orElseThrow(() -> new AppException(ErrorCode.USER_NOT_EXISTED));
    }
}











