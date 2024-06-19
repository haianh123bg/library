package com.haianh123.library.service;

import com.haianh123.library.entity.BookFile;
import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

public interface BookFileService {
    void init();
    void save(MultipartFile file, Long bookId);
    Resource load(String fileName);
    BookFile findByFileName(String fileName);
}
