package com.haianh123.library.controller;

import com.haianh123.library.dto.request.UserCreateRequest;
import com.haianh123.library.dto.response.ApiResponse;
import com.haianh123.library.dto.response.FavoriteBookResponse;
import com.haianh123.library.dto.response.UserResponse;
import com.haianh123.library.entity.FavoriteBooks;
import com.haianh123.library.entity.User;
import com.haianh123.library.service.FavoriteBooksService;
import com.haianh123.library.service.UserService;
import jakarta.mail.MessagingException;
import jakarta.validation.Valid;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
//@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    UserService userService;
    FavoriteBooksService favoriteBooksService;

    @PostMapping(value = {"/sigup", "/register"})
    public ApiResponse<UserResponse> createUser(@Valid @RequestBody UserCreateRequest request) throws MessagingException {
        return ApiResponse.<UserResponse>builder()
                .code(1000)
                .result(userService.register(request))
                .build();
    }

    @PostMapping(value = "/varify/keyactive/{email}")
    public ApiResponse<Boolean> verifyKeyActive(@RequestParam(value = "key") String key, @PathVariable(value = "email") String email){


        return ApiResponse.<Boolean>builder()
                .result(userService.accountVerify(key, email))
                .build();
    }

    @GetMapping("/{id}/favoriteBooks")
    public List<FavoriteBookResponse> getAllFavoriteBooksByUserId(@PathVariable(value = "id") int userId){

        return favoriteBooksService.getAllFavoriteBookByUserId(userId);
    }

    @GetMapping
    public User getUserByEmail(@RequestParam String email){

        return userService.findByEmail(email);
    }
}













