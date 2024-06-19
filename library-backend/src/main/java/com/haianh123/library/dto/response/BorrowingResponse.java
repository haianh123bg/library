package com.haianh123.library.dto.response;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.haianh123.library.dto.response.common.BookInBorrowingResponse;
import com.haianh123.library.dto.response.common.UserInBorrowingResponse;
import com.haianh123.library.entity.Book;
import com.haianh123.library.entity.User;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.util.Date;

@Setter
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class BorrowingResponse {

    private int borrowingFormId;

    private Date borrowingFormDate;

    private String borrowingFormType;

    private BigDecimal borrowingFormDeposit;

    private Date borrowingFormDueDate;

    private UserInBorrowingResponse user;

    private BookInBorrowingResponse book;
}








