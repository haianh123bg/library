package com.haianh123.library.dto.response.common;

import lombok.*;

@Setter
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BookInBorrowingResponse{
    private int id;
    private String name;
}
