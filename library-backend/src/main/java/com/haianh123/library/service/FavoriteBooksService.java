package com.haianh123.library.service;

import com.haianh123.library.dto.response.FavoriteBookResponse;
import com.haianh123.library.entity.FavoriteBooks;

import java.util.List;


public interface FavoriteBooksService {
    List<FavoriteBookResponse> getAllFavoriteBookByUserId(int userId);
}
