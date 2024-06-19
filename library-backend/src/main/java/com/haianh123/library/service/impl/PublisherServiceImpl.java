package com.haianh123.library.service.impl;

import com.haianh123.library.dto.response.PublisherInBookAddResponse;
import com.haianh123.library.repository.PublisherRepository;
import com.haianh123.library.service.PublisherService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class PublisherServiceImpl implements PublisherService {
    PublisherRepository publisherRepository;


    @Override
    public List<PublisherInBookAddResponse> getAllPublisherInBooks() {
        return publisherRepository.getAllPublishers();
    }
}
















