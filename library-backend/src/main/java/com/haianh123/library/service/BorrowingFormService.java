package com.haianh123.library.service;


import com.haianh123.library.dto.request.BorrowingFormRequest;
import com.haianh123.library.dto.response.BorrowingResponse;
import com.haianh123.library.entity.BorrowingForm;

import java.util.List;

public interface BorrowingFormService {
    Boolean checkBookAvailable(int bookId);

    Object createBorrowingForm(BorrowingFormRequest request);

    List<BorrowingResponse> getAllBorrowingForms();

    List<BorrowingResponse> getBorrowingByKey(String key);

    List<BorrowingResponse> getBorrowingById(int id);

    Integer findCountBorrowingFormByUserAccountName(String userAccountName);
}
