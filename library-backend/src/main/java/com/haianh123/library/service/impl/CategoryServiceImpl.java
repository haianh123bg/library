package com.haianh123.library.service.impl;

import com.haianh123.library.dto.request.CategoryCreateRequest;
import com.haianh123.library.dto.response.BookResponse;
import com.haianh123.library.dto.response.BooksResponse;
import com.haianh123.library.dto.response.CategoryResponse;
import com.haianh123.library.entity.Book;
import com.haianh123.library.entity.Category;
import com.haianh123.library.exception.AppException;
import com.haianh123.library.exception.ErrorCode;
import com.haianh123.library.mapper.BookMapper;
import com.haianh123.library.mapper.CategoryMapper;
import com.haianh123.library.repository.BookRepository;
import com.haianh123.library.repository.CategoryRepository;
import com.haianh123.library.service.CategoryService;

import lombok.AccessLevel;
import lombok.experimental.FieldDefaults;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@FieldDefaults(makeFinal = true,level = AccessLevel.PRIVATE)
public class CategoryServiceImpl implements CategoryService {
    CategoryRepository categoryRepository;
    BookRepository bookRepository;
    CategoryMapper categoryMapper;
    BookMapper bookMapper;
    @Autowired
    public CategoryServiceImpl(CategoryRepository categoryRepository, BookRepository bookRepository,
                               CategoryMapper categoryMapper,BookMapper bookMapper) {
        this.categoryRepository = categoryRepository;
        this.bookRepository = bookRepository;
        this.categoryMapper=categoryMapper;
        this.bookMapper=bookMapper;
    }

    //xem sách theo danh mục
    @Override
    public BooksResponse getBooksByCategory(int id, int pageNo, int pageSize, String sortBy, String sortDir) {
        if(!categoryRepository.existsById(id)){
            throw new AppException(ErrorCode.CATEGORY_NOT_EXISTED);
        }
        //tao doi tuong sort dua tren sortdir
        Sort sort= sortDir.equalsIgnoreCase(Sort.Direction.ASC.name())?Sort.by(sortBy).ascending() : Sort.by(sortBy).descending();
        Pageable pageable = PageRequest.of(pageNo,pageSize,sort);

        Page<Book>  books =bookRepository.findByCategoryId(id,pageable);

        List<BookResponse> bookResponses=books.getContent().stream()
                .map(bookMapper :: toBookResponse).collect(Collectors.toList());
        BooksResponse booksResponse=new BooksResponse();
        booksResponse.setContent(bookResponses);
        booksResponse.setPageNo(books.getNumber());
        booksResponse.setPageSize(books.getSize());
        booksResponse.setTotalPages(books.getTotalPages());
        booksResponse.setTotalElements(books.getTotalElements());
        booksResponse.setLast(books.isLast());

        return booksResponse;
    }

    // Lấy tất cả danh mục
    @Override
    public List<CategoryResponse> getAllCategories() {
        List<Category> categories = categoryRepository.findAll();

        return categories.stream().map(categoryMapper::toCategoryResponse).toList();
    }

    @Override
    public CategoryResponse createCategory(CategoryCreateRequest request) {
        Category category = categoryMapper.toCategory(request);
        category.setCreatedAt(LocalDateTime.now());
        category.setUpdatedAt(LocalDateTime.now());
        category.setTotalBooks(0);
        return categoryMapper.toCategoryResponse(categoryRepository.save(category));
    }

    @Override
    public void removeCategory(int categoryId) {
        Optional<Category> category =  categoryRepository.findById(categoryId);
        if(!category.isPresent()){
            throw new AppException(ErrorCode.CATEGORY_NOT_EXISTED);
        }
        if(category.get().getTotalBooks() != 0){
            throw new AppException(ErrorCode.CAN_NOT_REMOVE_CATEGORY);
        }
        categoryRepository.deleteById(categoryId);

    }

    @Override
    public CategoryResponse updateCategory(Integer id, CategoryCreateRequest request) {
        Category category = categoryRepository.findById(id).orElseThrow(() -> new AppException(ErrorCode.CATEGORY_NOT_EXISTED));

        category.setUpdatedAt(LocalDateTime.now());
        category.setName(request.getName());

        categoryRepository.save(category);

        return categoryMapper.toCategoryResponse(category);
    }
}














