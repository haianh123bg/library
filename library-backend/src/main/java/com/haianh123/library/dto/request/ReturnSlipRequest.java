package com.haianh123.library.dto.request;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.math.BigDecimal;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ReturnSlipRequest {

    @NotNull(message = "Không được bỏ trống mã mượn")
    private int borrowingFormId;

    @NotEmpty(message = "Không được bỏ trống")
    private String statusReturn;

    @Min(value = 0, message = "Số tiền không được thấp hơn 0")
    private BigDecimal moneyRefund;

    @Min(value = 0 , message = "Số tiền không được thấp hơn 0")
    private  BigDecimal moneyLateFee;
}
