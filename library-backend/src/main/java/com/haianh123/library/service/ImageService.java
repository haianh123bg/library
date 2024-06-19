package com.haianh123.library.service;

import com.haianh123.library.dto.request.ImageRequest;
import com.haianh123.library.entity.Image;

public interface ImageService {
    Image createImageInBook(int bookId, Image request);
}
