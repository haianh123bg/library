package com.haianh123.library.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.math.BigDecimal;
import java.sql.Date;

@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BorrowingFormRequest {

    @NotNull
    private Date date;

    @NotNull
    private Date dueDate;

    @NotNull
    @Email(message = "Email không đúng!")
    private String userAccountName;

    @NotNull
    private String userAccountPassword;

    @NotNull
    private BigDecimal moneyDeposit;

    @NotNull
    private int bookId;
}












