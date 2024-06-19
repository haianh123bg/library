package com.haianh123.library.controller;

import com.haianh123.library.dto.request.ReturnSlipRequest;
import com.haianh123.library.dto.response.ApiResponse;
import com.haianh123.library.service.ReturnSlipService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/returnBook")
public class ReturnSlipController {
    private final ReturnSlipService returnSlipService;

    @Autowired
    public ReturnSlipController(ReturnSlipService returnSlipService) {
        this.returnSlipService = returnSlipService;
    }
    @PostMapping
    public ApiResponse<Object> returnBook(@Valid @RequestBody ReturnSlipRequest request){

        return ApiResponse.builder()
                .result(returnSlipService.returnBook(request))
                .build();
    }
}
