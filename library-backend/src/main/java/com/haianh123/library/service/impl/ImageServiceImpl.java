package com.haianh123.library.service.impl;

import com.haianh123.library.dto.request.ImageRequest;
import com.haianh123.library.entity.Book;
import com.haianh123.library.entity.Image;
import com.haianh123.library.exception.AppException;
import com.haianh123.library.exception.ErrorCode;
import com.haianh123.library.mapper.BookMapper;
import com.haianh123.library.repository.BookRepository;
import com.haianh123.library.repository.ImageRepository;
import com.haianh123.library.service.ImageService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ImageServiceImpl implements ImageService {
    private final BookRepository bookRepository;
    private final BookMapper bookMapper;
    private final ImageRepository imageRepository;

    @Modifying
    @Override
    public Image createImageInBook(int bookId, Image request) {
        Book book = bookRepository.findById(bookId).orElseThrow(() ->
            new AppException(ErrorCode.BOOK_NOT_EXISTED)
        );

        request.setBook(book);
        return imageRepository.save(request);
    }
}
