package com.haianh123.library.controller;

import com.haianh123.library.dto.response.ApiResponse;
import com.haianh123.library.dto.response.PublisherInBookAddResponse;
import com.haianh123.library.service.PublisherService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/publishers")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class PublisherController {
    PublisherService publisherService;
    @GetMapping
    public ApiResponse<List<PublisherInBookAddResponse>> getAllPublishers() {

        return ApiResponse.<List<PublisherInBookAddResponse>>builder()
                .result(publisherService.getAllPublisherInBooks())
                .build();
    }
}
