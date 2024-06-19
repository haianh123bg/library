package com.haianh123.library.dto.request;

import com.haianh123.library.entity.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BookRequest {

    @NotEmpty(message = "Tên sách không được bỏ trống")
    private String name;

    private int publishingYear;
    private String description;
    private BigDecimal price;
    private int inventoryNumber;
    private int pageNumber;
    private String status;
    private String language;
    private float weight;
    private String size;

    private int author;
    private int category;
    private int publisher;
    private List<ImageRequest> images;

}
