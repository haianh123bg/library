package com.haianh123.library.service;

import com.haianh123.library.dto.response.AuthorResponse;
import com.haianh123.library.entity.Author;

import java.util.List;

public interface AuthorService {
    List<AuthorResponse> getAllAuthors();

    AuthorResponse getAuthorById(int id);
}
