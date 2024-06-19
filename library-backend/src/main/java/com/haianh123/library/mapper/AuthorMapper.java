package com.haianh123.library.mapper;

import com.haianh123.library.dto.response.AuthorResponse;
import com.haianh123.library.entity.Author;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.stereotype.Component;

@Component
@Mapper(componentModel = "spring")
public interface AuthorMapper {

    @Mapping(source = "description", target = "description")
    AuthorResponse toAuthorResponse(Author author);
}
