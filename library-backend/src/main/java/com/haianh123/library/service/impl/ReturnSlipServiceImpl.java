package com.haianh123.library.service.impl;

import com.haianh123.library.dto.request.ReturnSlipRequest;
import com.haianh123.library.dto.response.ReturnBookResponse;
import com.haianh123.library.entity.Book;
import com.haianh123.library.entity.BorrowingForm;
import com.haianh123.library.entity.ReturnSlip;
import com.haianh123.library.exception.AppException;
import com.haianh123.library.exception.ErrorCode;
import com.haianh123.library.mapper.ReturnBookMapper;
import com.haianh123.library.repository.BookRepository;
import com.haianh123.library.repository.BorrowingFormRepository;
import com.haianh123.library.repository.ReturnSlipRepository;
import com.haianh123.library.service.ReturnSlipService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDate;

@Service
@RequiredArgsConstructor
@Slf4j
@FieldDefaults(makeFinal = true, level = AccessLevel.PRIVATE)
public class ReturnSlipServiceImpl implements ReturnSlipService {
    BookRepository bookRepository;
    BorrowingFormRepository borrowingFormRepository;
    ReturnSlipRepository returnSlipRepository;
    ReturnBookMapper returnBookMapper;
    @Override
    public Object returnBook(ReturnSlipRequest request) {
        // kiểm tra xem phiếu mượn có tồn tại hay không
        BorrowingForm borrowingForm = borrowingFormRepository.findById(request.getBorrowingFormId()).orElseThrow(() ->
                new AppException(ErrorCode.BORROWING_FORM_NOT_FOUND)
                );


        //
        ReturnSlip returnSlip = new ReturnSlip();
        returnSlip.setBook(borrowingForm.getBook());
        returnSlip.setUser(borrowingForm.getUser());

        //
        returnSlip.setStatusReturn(request.getStatusReturn());
        returnSlip.setReturnSlipRefund(request.getMoneyRefund());
        returnSlip.setReturnSlipLateFee(request.getMoneyLateFee());


        java.util.Date dateReturn = Date.valueOf(LocalDate.now());
        java.util.Date dateBorrow = borrowingForm.getBorrowingFormDate();

        //
        returnSlip.setBorrowDate( dateBorrow );
        returnSlip.setReturnSlipDate(dateReturn);
        returnSlip.setLate(dateReturn.compareTo(borrowingForm.getBorrowingFormDueDate()) > 0);

        ReturnSlip returnSlipResponse = returnSlipRepository.save(returnSlip);
        Book book = borrowingForm.getBook();
        book.setInventoryNumber(book.getInventoryNumber() + 1);

        borrowingFormRepository.deleteById(borrowingForm.getBorrowingFormId());

        //Mapper
        ReturnBookResponse response = returnBookMapper.toReturnBookResponse(returnSlipResponse);
        response.setBook(returnBookMapper.toBookInReturnBookResponse(returnSlipResponse.getBook()));
        response.setUser(returnBookMapper.toUserInReturnBookResponse(returnSlipResponse.getUser()));
        return response;
    }
}













