package com.haianh123.library.mapper;

import com.haianh123.library.dto.response.ReturnBookResponse;
import com.haianh123.library.dto.response.common.BookInReturnBookResponse;
import com.haianh123.library.dto.response.common.UserInReturnBookResponse;
import com.haianh123.library.entity.Book;
import com.haianh123.library.entity.ReturnSlip;
import com.haianh123.library.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.stereotype.Component;

@Component
@Mapper(componentModel = "spring")
public interface ReturnBookMapper {
    BookInReturnBookResponse toBookInReturnBookResponse(Book book);
    UserInReturnBookResponse toUserInReturnBookResponse(User user);

    @Mapping(target = "user", ignore = true)
    @Mapping(target = "book", ignore = true)
    ReturnBookResponse toReturnBookResponse(ReturnSlip returnSlip);
}
