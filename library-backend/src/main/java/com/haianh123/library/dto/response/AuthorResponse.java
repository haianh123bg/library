package com.haianh123.library.dto.response;

import lombok.*;

@Setter
@Getter
@Builder
public class AuthorResponse {

    private int id;

    private String name;

    private String image;

    private int totalBook;

    private String description;


}
