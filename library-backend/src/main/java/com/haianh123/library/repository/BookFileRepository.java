package com.haianh123.library.repository;

import com.haianh123.library.entity.BookFile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookFileRepository extends JpaRepository<BookFile,Integer> {
    BookFile findByFileName(String fileName);
}

