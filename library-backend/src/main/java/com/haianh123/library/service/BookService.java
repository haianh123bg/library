package com.haianh123.library.service;

import com.haianh123.library.dto.request.BookRequest;
import com.haianh123.library.dto.response.BookResponse;
import com.haianh123.library.dto.response.BooksResponse;
import com.haianh123.library.dto.response.ExcelMetadataDTO;
import com.haianh123.library.dto.response.ResourceDTO;

import java.util.List;
import java.util.Map;


public interface BookService {

    BooksResponse getAllBooks(int pageNo, int pageSize, String sortBy, String sortDir);
    BookResponse getBookById(int id);

    Void createBook(BookRequest bookRequest);

    void deleteBook(int id);

    BookResponse updateBook(BookRequest bookRequest, int id);

    BooksResponse filterBooks(Map<String, String> filters);

    // Lấy ra ba sách mới nhất
    List<BookResponse> getThreeBookRelease();

    BooksResponse getBooksByAuthorId(int id, int pageNo, int pageSize, String sortBy, String sortDir);
    List<BookResponse> getAllBooksNoPages();


    ExcelMetadataDTO prepareExcelData();

    public ResourceDTO exportExcel();

    BooksResponse searchAndPages(int pageNo, int pageSize, String sortBy, String sortDir, String search);
}
