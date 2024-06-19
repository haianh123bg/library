package com.haianh123.library.repository;

import com.haianh123.library.dto.response.FavoriteBookResponse;
import com.haianh123.library.entity.FavoriteBooks;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Objects;

@Repository
public interface FavoriteBooksRepository extends JpaRepository<FavoriteBooks, Integer> {

    @Query("SELECT new com.haianh123.library.dto.response.FavoriteBookResponse(b.id, b.name, i.link) " +
            "FROM FavoriteBooks fb " +
            "JOIN Book b ON fb.bookId = b.id " +
            "JOIN Image i ON i.book.id = b.id " +
            "WHERE fb.userId = :userId")
    List<FavoriteBookResponse> findFavoriteBooksByUserId(Integer userId);
}
