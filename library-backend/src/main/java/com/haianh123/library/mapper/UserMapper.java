package com.haianh123.library.mapper;

import com.haianh123.library.dto.request.UserCreateRequest;
import com.haianh123.library.dto.response.UserResponse;
import com.haianh123.library.entity.User;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;

@Component
@Mapper(componentModel = "spring")
public interface UserMapper {
    User toUser(UserCreateRequest request);
    UserResponse toUserResponse(User user);
}
