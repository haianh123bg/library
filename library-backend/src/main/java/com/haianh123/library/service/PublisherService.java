package com.haianh123.library.service;

import com.haianh123.library.dto.response.PublisherInBookAddResponse;

import java.util.List;

public interface PublisherService {
    List<PublisherInBookAddResponse> getAllPublisherInBooks();
}
