package com.haianh123.library.dto.response.common;

import lombok.*;

@Setter
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserInReturnBookResponse {
    private String userName;
    private String userAccountName;
}
