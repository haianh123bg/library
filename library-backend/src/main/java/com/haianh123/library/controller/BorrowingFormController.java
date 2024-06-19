package com.haianh123.library.controller;

import com.haianh123.library.dto.request.BorrowingFormRequest;
import com.haianh123.library.dto.response.ApiResponse;
import com.haianh123.library.dto.response.BorrowingResponse;
import com.haianh123.library.entity.BorrowingForm;
import com.haianh123.library.service.BorrowingFormService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/borrows")
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@RequiredArgsConstructor
public class BorrowingFormController {
    BorrowingFormService borrowingFormService;

    @GetMapping("/checkBook/{bookId}")
    public ApiResponse<Boolean> checkBook(@PathVariable(value = "bookId") int bookId) {
        return ApiResponse.<Boolean>builder()
                .result(borrowingFormService.checkBookAvailable(bookId))
                .build();
    }

    @PostMapping("/create")
    public ApiResponse<Object> createBorrowingForm(@RequestBody BorrowingFormRequest request){
        return ApiResponse.builder()
                .result(borrowingFormService.createBorrowingForm(request)).build();
    }

    @GetMapping
    public ApiResponse<List<BorrowingResponse>> getAllBorrowingForm(){
        return ApiResponse.<List<BorrowingResponse>>builder()
                .result(borrowingFormService.getAllBorrowingForms())
                .build();
    }

    @GetMapping("/search")
    public ApiResponse<List<BorrowingResponse>> searchByKey(@RequestParam(value = "key") String key){
        return ApiResponse.<List<BorrowingResponse>>builder()
                .result(borrowingFormService.getBorrowingByKey(key))
                .build();
    }

    @GetMapping("/search/{id}")
    public ApiResponse<List<BorrowingResponse>> searchByKey(@PathVariable(value = "id") int id){
        return ApiResponse.<List<BorrowingResponse>>builder()
                .result(borrowingFormService.getBorrowingById(id))
                .build();
    }
}
















