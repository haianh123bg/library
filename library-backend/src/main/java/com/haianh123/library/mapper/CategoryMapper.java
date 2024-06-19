package com.haianh123.library.mapper;

import com.haianh123.library.dto.request.CategoryCreateRequest;
import com.haianh123.library.dto.response.CategoryResponse;
import com.haianh123.library.entity.Category;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;

@Component
@Mapper(componentModel = "spring")
public interface CategoryMapper {
    CategoryResponse toCategoryResponse(Category category);

    Category toCategory(CategoryCreateRequest request);
}
