package com.haianh123.library.service.impl;

import com.haianh123.library.dto.response.FavoriteBookResponse;
import com.haianh123.library.repository.FavoriteBooksRepository;
import com.haianh123.library.service.FavoriteBooksService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
@FieldDefaults(makeFinal = true, level = AccessLevel.PRIVATE)
public class FavoriteBookServiceImpl implements FavoriteBooksService {
    FavoriteBooksRepository favoriteBooksRepository;

    @Override
    public List<FavoriteBookResponse> getAllFavoriteBookByUserId(int userId) {
        log.info(favoriteBooksRepository.findFavoriteBooksByUserId(userId).toString());
        return favoriteBooksRepository.findFavoriteBooksByUserId(userId);
    }
}













