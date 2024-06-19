package com.haianh123.library.controller;

import com.haianh123.library.dto.request.SignInRequest;
import com.haianh123.library.dto.request.UserCreateRequest;
import com.haianh123.library.dto.response.ApiResponse;
import com.haianh123.library.dto.response.TokenResponse;
import com.haianh123.library.dto.response.UserResponse;
import com.haianh123.library.service.AuthenticationService;
import com.haianh123.library.service.UserService;
import jakarta.mail.MessagingException;
import jakarta.validation.Valid;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class AuthenticationController {
    AuthenticationService authenticationService;
    UserService userService;

    @PostMapping(value = {"/sigup", "/register"})
    public ApiResponse<UserResponse> createUser(@Valid @RequestBody UserCreateRequest request) throws MessagingException {
        return ApiResponse.<UserResponse>builder()
                .code(1000)
                .result(userService.register(request))
                .build();
    }

    @PostMapping(value = "/varify/keyactive/{email}")
    public ApiResponse<Boolean> verifyKeyActive(
            @RequestParam(value = "key") String key,
            @PathVariable(value = "email") String email){


        return ApiResponse.<Boolean>builder()
                .result(userService.accountVerify(key, email))
                .build();
    }

    @PostMapping("/access")
    public ApiResponse<TokenResponse> login(@RequestBody SignInRequest request){
        return ApiResponse.<TokenResponse>builder()
                .result(authenticationService.authenticate(request))
                .build();
    }

    @PostMapping("/refresh")
    public String refresh(){
        return "success!";
    }

    @PostMapping("/logout")
    public String logout(){
        return "success!";
    }
}








