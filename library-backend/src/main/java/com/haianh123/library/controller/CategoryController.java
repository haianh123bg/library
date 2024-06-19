package com.haianh123.library.controller;

import com.haianh123.library.dto.request.CategoryCreateRequest;
import com.haianh123.library.dto.response.ApiResponse;
import com.haianh123.library.dto.response.BooksResponse;
import com.haianh123.library.dto.response.CategoryResponse;
import com.haianh123.library.service.CategoryService;
import com.haianh123.library.utils.AppConstants;
import jakarta.validation.Valid;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/categories")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class CategoryController {
    CategoryService categoryService;

    @GetMapping
    public ApiResponse<List<CategoryResponse>> getAllCategories(){

        return ApiResponse.<List<CategoryResponse>>builder()
                .result(categoryService.getAllCategories())
                .build();
    }

    @PostMapping
    public ApiResponse<CategoryResponse> createCategories(@Valid @RequestBody CategoryCreateRequest request){
        return ApiResponse.<CategoryResponse>builder()
                .result(categoryService.createCategory(request))
                .build();
    }

    @GetMapping("/{id}/books")
    public ApiResponse<BooksResponse> getBooksByCategory(@PathVariable("id") int id,
                                                         @RequestParam(value = "pageNo",defaultValue = AppConstants.DEFAULT_PAGE_NUMBER,required = false) int pageNo,
                                                         @RequestParam(value = "pageSize",defaultValue = AppConstants.DEFAULT_PAGE_SIZE,required = false) int pageSize,
                                                         @RequestParam(value = "sortBy",defaultValue = AppConstants.DEFAULT_SORT_BY,required = false) String sortBy,
                                                         @RequestParam(value = "sortDir",defaultValue = AppConstants.DEFAULT_SORT_DIRECTION,required = false) String sortDir
    ){
        return ApiResponse.<BooksResponse>builder().result(categoryService.getBooksByCategory(id, pageNo, pageSize, sortBy, sortDir)).build();
    }

    @DeleteMapping("/{id}")
    public ApiResponse<String> deleteCategory(@PathVariable("id") int id){
        categoryService.removeCategory(id);
        return ApiResponse.<String>builder()
                .code(1000)
                .result("Delete Successful!")
                .build();
    }

    @PutMapping("/{id}")
    public ApiResponse<CategoryResponse> updateCategory(@PathVariable(value = "id") Integer id, @Valid @RequestBody CategoryCreateRequest request){

        return ApiResponse.<CategoryResponse>builder()
                .code(1000)
                .result(categoryService.updateCategory(id, request))
                .build();
    }


}













