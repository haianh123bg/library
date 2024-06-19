package com.haianh123.library.service;

import com.haianh123.library.dto.request.CategoryCreateRequest;
import com.haianh123.library.dto.response.BooksResponse;
import com.haianh123.library.dto.response.CategoriesResponse;
import com.haianh123.library.dto.response.CategoryResponse;

import java.util.List;

public interface CategoryService{
    //get sach theo danh muc(co phan trang sap xep)
    BooksResponse getBooksByCategory(int id,int pageNo,int pageSize,String sortBy,String sortDir);

    // lay tat ca danh muc
    List<CategoryResponse> getAllCategories();

    // Tao category
    CategoryResponse createCategory(CategoryCreateRequest request);

    // Remove categories
    void removeCategory(int categoryId);

    CategoryResponse updateCategory(Integer id, CategoryCreateRequest request);
}


















