package com.haianh123.library.service.impl;

import com.haianh123.library.dto.request.BorrowingFormRequest;

import com.haianh123.library.dto.response.BorrowingResponse;

import com.haianh123.library.dto.response.common.BookInBorrowingResponse;
import com.haianh123.library.dto.response.common.UserInBorrowingResponse;
import com.haianh123.library.entity.Book;
import com.haianh123.library.entity.BorrowingForm;
import com.haianh123.library.entity.User;
import com.haianh123.library.exception.AppException;
import com.haianh123.library.exception.ErrorCode;
import com.haianh123.library.mapper.BorrowingFormMapper;
import com.haianh123.library.repository.BookRepository;
import com.haianh123.library.repository.BorrowingFormRepository;
import com.haianh123.library.repository.UserRepository;
import com.haianh123.library.service.BorrowingFormService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@FieldDefaults(makeFinal = true, level = AccessLevel.PRIVATE)
@RequiredArgsConstructor
public class BorrowingFormServiceImpl implements BorrowingFormService {
    BookRepository bookRepository;
    UserRepository userRepository;
    BorrowingFormRepository borrowingFormRepository;
    BorrowingFormMapper borrowingFormMapper;

    @Override
    public Boolean checkBookAvailable(int bookId) {
        Book book = bookRepository.findById(bookId).orElseThrow(() ->
                 new AppException(ErrorCode.BOOK_NOT_EXISTED));
        if(book.getInventoryNumber() <=0 ){
            throw new AppException(ErrorCode.BOOK_NOT_AVAILABLE);
        }
        return true;
    }

    @Override
    public Object createBorrowingForm(BorrowingFormRequest request) {
        Book book = bookRepository.findById(request.getBookId()).orElseThrow(() ->
                new AppException(ErrorCode.BOOK_NOT_EXISTED));
        if(book.getInventoryNumber() <=0 ){
            throw new AppException(ErrorCode.BOOK_NOT_AVAILABLE);
        }

        User user = userRepository.findByUserAccountName(request.getUserAccountName()).orElseThrow(() ->
                new AppException(ErrorCode.USER_NOT_EXISTED));

        BorrowingForm borrowingForm = new BorrowingForm();
        borrowingForm.setBook(book);
        borrowingForm.setUser(user);
        borrowingForm.setBorrowingFormDate(request.getDate());
        borrowingForm.setBorrowingFormDueDate(request.getDueDate());
        borrowingForm.setBorrowingFormDeposit(request.getMoneyDeposit());
        borrowingForm.setBorrowingFormType("Mượn");

        // Cập nhật số lượng sách trong bảng sách
        book.setInventoryNumber(book.getInventoryNumber() - 1);
        bookRepository.save(book);

        BorrowingResponse response = borrowingFormMapper.toBorrowingResponse(borrowingFormRepository.save(borrowingForm));
        response.setUser(new UserInBorrowingResponse(borrowingForm.getUser().getUsername(), borrowingForm.getUser().getUserAccountName()));
        response.setBook(new BookInBorrowingResponse(borrowingForm.getBook().getId(), borrowingForm.getBook().getName()));
        return response;
    }

    @Override
    public List<BorrowingResponse> getAllBorrowingForms() {

        return borrowingFormRepository.findAll().stream().map(borrowingForm -> {
            BorrowingResponse response = borrowingFormMapper.toBorrowingResponse(borrowingForm);

            response.setUser(new UserInBorrowingResponse(borrowingForm.getUser().getUsername(), borrowingForm.getUser().getUserAccountName()));
            response.setBook(new BookInBorrowingResponse(borrowingForm.getBook().getId(), borrowingForm.getBook().getName()));
            return response;
        }).collect(Collectors.toList());
    }

    @Override
    public List<BorrowingResponse> getBorrowingByKey(String key) {
        if(key.isEmpty() || "".equals(key)){
            throw new AppException(ErrorCode.INVALID_KEY);
        }
        if (isNumeric(key)) {
            BorrowingForm borrowingForm = borrowingFormRepository.findById(Integer.parseInt(key))
                    .orElseThrow(() -> new AppException(ErrorCode.BORROWING_FORM_NOT_FOUND));
            BorrowingResponse response = borrowingFormMapper.toBorrowingResponse(borrowingForm);
            response.setBook(borrowingFormMapper.toBookInBorrowingResponse(borrowingForm.getBook()));
            response.setUser(borrowingFormMapper.toUserInBorrowingResponse(borrowingForm.getUser()));
            return List.of(response);
        } else {
            List<BorrowingForm> borrowingForms = borrowingFormRepository.findByKey(key)
                    .orElseThrow(() -> new AppException(ErrorCode.BORROWING_FORM_NOT_FOUND));
            if(borrowingForms.isEmpty()){
                throw new AppException(ErrorCode.BORROWING_FORM_NOT_FOUND);
            }
            return borrowingForms.stream()
                    .map(borrowingForm ->{
                        BorrowingResponse response = borrowingFormMapper.toBorrowingResponse(borrowingForm);
                        response.setBook(borrowingFormMapper.toBookInBorrowingResponse(borrowingForm.getBook()));
                        response.setUser(borrowingFormMapper.toUserInBorrowingResponse(borrowingForm.getUser()));
                        return response;
                    })
                    .collect(Collectors.toList());
        }
    }

    @Override
    public List<BorrowingResponse> getBorrowingById(int id) {

        BorrowingForm borrowingForm = borrowingFormRepository.findById(id).orElseThrow(() ->
                new AppException(ErrorCode.BORROWING_FORM_NOT_FOUND));
        List<BorrowingResponse> responses = new ArrayList<>();
        responses.add(borrowingFormMapper.toBorrowingResponse(borrowingForm));
        return responses;
    }

    @Override
    public Integer findCountBorrowingFormByUserAccountName(String userAccountName) {

        return borrowingFormRepository.findCountBorrowingFormByUserAccountName(userAccountName);
    }


    private boolean isNumeric(String key){
        try {
            Integer.parseInt(key);
            return true;
        }catch (NumberFormatException e){
            return false;
        }
    }
}












