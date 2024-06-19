package com.haianh123.library.dto.response;

import lombok.*;

import java.io.Serializable;
import java.util.List;

@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TokenResponse implements Serializable {

    private String accessToken;

    private String refreshToken;

    private int userId;

    private List<String> roles;

    // more over

}
