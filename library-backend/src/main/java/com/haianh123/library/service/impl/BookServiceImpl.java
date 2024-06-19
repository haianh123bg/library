package com.haianh123.library.service.impl;

import com.haianh123.library.dto.request.BookRequest;
import com.haianh123.library.dto.response.BookResponse;
import com.haianh123.library.dto.response.BooksResponse;
import com.haianh123.library.dto.response.ExcelMetadataDTO;
import com.haianh123.library.dto.response.ResourceDTO;
import com.haianh123.library.entity.Book;
import com.haianh123.library.entity.Image;
import com.haianh123.library.exception.AppException;
import com.haianh123.library.exception.ErrorCode;
import com.haianh123.library.mapper.BookMapper;
import com.haianh123.library.repository.*;
import com.haianh123.library.service.BookService;
import com.haianh123.library.service.ExcelService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class BookServiceImpl implements BookService {



    BookRepository bookRepository;
    CategoryRepository categoryRepository;
    AuthorRepository authorRepository;
    PublisherRepository publisherRepository;
    ExcelService excelService;
    BookMapper bookMapper;
    ImageRepository imageRepository;

    @Override
    public BooksResponse filterBooks(Map<String, String> filters) {

        return null;
    }

    @Override
    public List<BookResponse> getThreeBookRelease() {
        return bookRepository.findTop3NewestBooks().stream().map(bookMapper::toBookResponse).collect(Collectors.toList());
    }

    @Override
    public BooksResponse getBooksByAuthorId(int id, int pageNo, int pageSize, String sortBy, String sortDir) {
        authorRepository.findById(id).orElseThrow(() ->
           new AppException(ErrorCode.AUTHOR_NOT_EXISTED)
        );


        Sort sort = sortDir.equalsIgnoreCase(Sort.Direction.ASC.name()) ? Sort.by(sortBy).ascending() : Sort.by(sortBy).descending();
        Pageable pageable = PageRequest.of(pageNo,pageSize,sort);

        Page<Book>  books = bookRepository.findByAuthorId(id,pageable);

        if(books.isEmpty()){
            throw new AppException(ErrorCode.BOOK_NOT_EXISTED);
        }

        List<BookResponse> bookResponses = books.getContent().stream()
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

    @Override
    public List<BookResponse> getAllBooksNoPages() {
        return bookRepository.findAll().stream().map(bookMapper::toBookResponse).collect(Collectors.toList());
    }

    @Override
    public ExcelMetadataDTO prepareExcelData() {
        final var excelMetadataDTO = new ExcelMetadataDTO();
        excelMetadataDTO.setTableName("Books");
        excelMetadataDTO.setHeaders(List.of("id", "name", "publishingYear", "description", "price"
                ,"inventoryNumber","pageNumber","status","language","createdAt","updatedAt","weight","size"
                ,"ratingsStar","author","category","publisher","images","couponCodes"));
        List<Book> books = bookRepository.findAll();
        List<BookResponse> bookResponseList = books.stream().map(bookMapper::toBookResponse).collect(Collectors.toList());
        final var bookResponses = bookResponseList;
        List<Map<String, String>> metadata = new ArrayList<>();
        for (BookResponse book : bookResponses) {
            Map<String, String> data = new HashMap<>();
            data.put("id", Integer.toString(book.getId()));
            data.put("name", book.getName());
            data.put("publishingYear", Integer.toString(book.getPublishingYear()));
            data.put("description", book.getDescription());
            data.put("price", book.getPrice().toString());
            data.put("inventoryNumber", Integer.toString(book.getInventoryNumber()));
            data.put("pageNumber", Integer.toString(book.getPageNumber()));
            data.put("status", book.getStatus());
            data.put("language", book.getLanguage());
            data.put("createdAt", book.getCreatedAt() != null ? book.getCreatedAt().toString() : "");
            data.put("updatedAt", book.getUpdatedAt() != null ? book.getUpdatedAt().toString() : "");
            data.put("weight", Float.toString(book.getWeight()));
            data.put("size", book.getSize());
            data.put("ratingsStar", Float.toString(book.getRatingsStar()));
            data.put("author", book.getAuthor() != null ? book.getAuthor().getName() : "");
            data.put("category", book.getCategory() != null ? book.getCategory().getName() : "");
            data.put("publisher", book.getPublisher() != null ? book.getPublisher().getName() : "");
            data.put("images", book.getImages() != null ? "image" : "");
            data.put("couponCodes", book.getCouponCodes() != null ? "image" : "");
            metadata.add(data);
        }

        excelMetadataDTO.setDatas(metadata);
        return excelMetadataDTO;
    }

    @Override
    public ResourceDTO exportExcel() {
        final var resourceDTO = excelService.exportExcel(prepareExcelData());
        resourceDTO.setFileName("Books");
        return resourceDTO;
    }

    @Override
    public BooksResponse searchAndPages(int pageNo, int pageSize, String sortBy, String sortDir, String search) {
        Sort sort = sortDir.equalsIgnoreCase(Sort.Direction.ASC.name()) ? Sort.by(sortBy).ascending()
                : Sort.by(sortBy).descending();

        //create Pageable instance
        Pageable pageable = PageRequest.of(pageNo, pageSize, sort);
        Page<Book> books;
        if(search != null && !search.isEmpty()) {
            books = bookRepository.searchAndPages(search, pageable);
        } else{
            books = bookRepository.findAll(pageable);
        }
        if(books.getTotalElements() <= 0) {
            throw new AppException(ErrorCode.BOOK_NOT_EXISTED);
        }
        // Get content for page object
        List<BookResponse> content = books.getContent().stream().map(bookMapper::toBookResponse).collect(Collectors.toList());

        return BooksResponse.builder()
                .pageNo(books.getNumber())
                .pageSize(books.getSize())
                .totalPages(books.getTotalPages())
                .totalElements(books.getTotalElements())
                .content(content)
                .last(books.isLast())
                .build();
    }

    @Override
    public BooksResponse getAllBooks(int pageNo, int pageSize, String sortBy, String sortDir) {
        Sort sort = sortDir.equalsIgnoreCase(Sort.Direction.ASC.name()) ? Sort.by(sortBy).ascending()
                : Sort.by(sortBy).descending();

        //create Pageable instance
        Pageable pageable = PageRequest.of(pageNo, pageSize, sort);
        Page<Book> books = bookRepository.findAll(pageable);

        if(books.isEmpty()){
            throw new AppException(ErrorCode.BOOK_NOT_EXISTED);
        }

        // Get content for page object
        List<Book> listOfBooks = books.getContent();
        List<BookResponse> content = listOfBooks.stream().map(bookMapper::toBookResponse).collect(Collectors.toList());

        // Set BooksResponse
        BooksResponse booksResponse = new BooksResponse();
        booksResponse.setContent(content);
        booksResponse.setPageNo(books.getNumber());
        booksResponse.setPageSize(books.getSize());
        booksResponse.setTotalElements(books.getTotalElements());
        booksResponse.setTotalPages(books.getTotalPages());
        booksResponse.setLast(books.isLast());

        return booksResponse;
    }

    @Override
    public BookResponse getBookById(int id) {
        Book book = bookRepository.findById(id).orElseThrow(() ->
                new AppException(ErrorCode.BOOK_NOT_EXISTED));
        return bookMapper.toBookResponse(book);
    }

    @Override
    public Void createBook(BookRequest bookRequest) {
        Book book = bookMapper.toBook(bookRequest);

        book.setAuthor(authorRepository.findById(bookRequest.getAuthor()).orElseThrow(
                () -> new AppException(ErrorCode.AUTHOR_NOT_EXISTED)
        ));
        book.setCategory(categoryRepository.findById(bookRequest.getCategory()).orElseThrow(
                () -> new AppException(ErrorCode.CATEGORY_NOT_EXISTED)
        ));
        book.setPublisher(publisherRepository.findById(bookRequest.getPublisher()).orElseThrow(
                () -> new AppException(ErrorCode.PUBLISHER_NOT_EXISTED)
        ));

        book.setCreatedAt(LocalDateTime.now());
        book.setUpdatedAt(LocalDateTime.now());
        book.setImages(null);

        Book bookCreate = bookRepository.save(book);
        int bookId = bookCreate.getId();

        bookRequest.getImages().forEach(image ->{
            imageRepository.saveImage(bookId, image.getLink(), image.isAvatar(), image.getData());
        });
        return null;
    }

    @Override
    public void deleteBook(int id) {
        Book book = bookRepository.findById(id).orElseThrow(() -> new AppException(ErrorCode.BOOK_NOT_EXISTED));
        bookRepository.delete(book);

    }

    @Override
    public BookResponse updateBook(BookRequest bookRequest, int id) {
        if (!bookRepository.existsById(id)){
            throw new AppException(ErrorCode.BOOK_NOT_EXISTED);
        }
        Book book = bookMapper.toBook(bookRequest);

        book.setId(id);
        book.setAuthor(authorRepository.findById(bookRequest.getAuthor()).orElseThrow(
                () -> new AppException(ErrorCode.AUTHOR_NOT_EXISTED)
        ));
        book.setCategory(categoryRepository.findById(bookRequest.getCategory()).orElseThrow(
                () -> new AppException(ErrorCode.CATEGORY_NOT_EXISTED)
        ));
        book.setPublisher(publisherRepository.findById(bookRequest.getPublisher()).orElseThrow(
                () -> new AppException(ErrorCode.PUBLISHER_NOT_EXISTED)
        ));
        Book bookCreate = bookRepository.save(book);
        return bookMapper.toBookResponse(bookCreate);
    }
}

















