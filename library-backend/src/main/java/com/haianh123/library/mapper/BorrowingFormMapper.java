package com.haianh123.library.mapper;

import com.haianh123.library.dto.response.BorrowingResponse;
import com.haianh123.library.dto.response.common.BookInBorrowingResponse;
import com.haianh123.library.dto.response.common.UserInBorrowingResponse;
import com.haianh123.library.entity.Book;
import com.haianh123.library.entity.BorrowingForm;
import com.haianh123.library.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.stereotype.Component;

@Component
@Mapper(componentModel = "spring")
public interface BorrowingFormMapper {

    @Mapping(target = "user", ignore = true)
    @Mapping(target = "book", ignore = true)
    BorrowingResponse toBorrowingResponse(BorrowingForm borrowingForm);


    BookInBorrowingResponse toBookInBorrowingResponse(Book book);

    @Mapping(target = "userAccountName", source = "userAccountName")
    UserInBorrowingResponse toUserInBorrowingResponse(User user);
}
