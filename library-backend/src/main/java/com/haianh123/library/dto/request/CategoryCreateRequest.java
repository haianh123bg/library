package com.haianh123.library.dto.request;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CategoryCreateRequest {

    @NotEmpty(message = "Không được bỏ trống")
    @NotNull(message = "Không được là null")
    @Size(max = 30, message = "Không được quá 30 ký tự")
    private String name;
}
