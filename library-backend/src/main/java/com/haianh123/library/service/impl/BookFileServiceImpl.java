package com.haianh123.library.service.impl;

import com.haianh123.library.entity.BookFile;
import com.haianh123.library.repository.BookFileRepository;
import com.haianh123.library.service.BookFileService;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.*;
import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class BookFileServiceImpl implements BookFileService {
    private final BookFileRepository bookFileRepository;
    private final Path root= Paths.get("uploads");

    @Override
    public void init() {
        try{
            Files.createDirectories(root);
        }
        catch (IOException e) {
            throw new RuntimeException("Could not initialize folder for upload!");
        }

    }

    @Override
    public void save(MultipartFile file, Long bookId) {
        try {
            Files.copy(file.getInputStream(), root.resolve(file.getOriginalFilename()));
            BookFile bookFile = new BookFile();
            bookFile.setBookId(bookId);
            bookFile.setFileName(file.getOriginalFilename());
            bookFile.setUploadDate(LocalDateTime.now());


            bookFileRepository.save(bookFile);

        } catch (Exception e) {
            if (e instanceof FileAlreadyExistsException) {
                throw new RuntimeException("A file of that name already exists.");
            }

            throw new RuntimeException(e.getMessage());
        }

    }

    @Override
    public Resource load(String fileName) {
        return null;
    }

    @Override
    public BookFile findByFileName(String fileName) {
        return bookFileRepository.findByFileName(fileName);
    }

}
