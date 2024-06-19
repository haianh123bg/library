package com.haianh123.library.repository;

import com.haianh123.library.entity.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Integer> {
    Page<Book> findByPublisherId(int id, Pageable pageable);
    Page<Book> findByCategoryId(int id,Pageable pageable);
    Page<Book> findByAuthorId(int id,Pageable pageable);

    @Query(value = "SELECT b FROM Book b ORDER BY b.createdAt DESC LIMIT 3")
    List<Book> findTop3NewestBooks();

    @Query(
            value = "SELECT b FROM Book b WHERE b.name like %:search% " +
            "OR b.author.name like %:search% " +
            "OR b.category.name like %:search% " +
            "OR b.publisher.name like %:search%")
    Page<Book> searchAndPages(String search, Pageable pageable);
}
