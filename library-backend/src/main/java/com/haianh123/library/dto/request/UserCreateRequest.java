package com.haianh123.library.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.*;

@Setter
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserCreateRequest {
    @NotEmpty
    private String userName;

    @Email(message = "Email không hợp lệ")
    private String userAccountName;

    @Size(max = 20, message = "Mật khẩu phải nhỏ hơn 20 ký tự")
    @Size(min = 8, message = "Mật khẩu lớn hơn 8 ký tự")
    @Pattern(regexp = "\\S+", message = "Mật khẩu không được chứa khoảng trắng")
    private String userAccountPassword;
}
