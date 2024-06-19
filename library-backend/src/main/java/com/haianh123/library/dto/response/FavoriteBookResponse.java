package com.haianh123.library.dto.response;

import com.haianh123.library.entity.Image;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class FavoriteBookResponse {
    private Integer bookId;
    private String bookName;
    private String bookImage;

}
