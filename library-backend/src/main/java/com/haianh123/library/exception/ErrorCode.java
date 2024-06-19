package com.haianh123.library.exception;

import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;

@Getter
public enum ErrorCode {
    UNCATEGORIED_EXCEPTION(9999, "Uncategorized error!", HttpStatus.INTERNAL_SERVER_ERROR),
    USER_EXISTED(1001, "User existed!", HttpStatus.BAD_REQUEST),
    INVALID_KEY(1002, "Invalid message key", HttpStatus.BAD_REQUEST),
    INVALID_EMAIL(1002, "Invalid email key", HttpStatus.BAD_REQUEST),
    USERNAME_INVALID(1003, "Username must be at least {min} characters", HttpStatus.BAD_REQUEST),
    INVALID_PASSWORD(1004, "Password must be at least {min} characters", HttpStatus.BAD_REQUEST),
    USER_NOT_EXISTED(1005,"Tài khoản không đúng", HttpStatus.NOT_FOUND),
    UNAUTHENTICATED(1006, "Unauthenticated", HttpStatus.UNAUTHORIZED),
    UNAUTHORIZED(1007,"You do not have permission", HttpStatus.FORBIDDEN),
    INVALID_DOB(1008, "You age must be at least {min}", HttpStatus.BAD_REQUEST),
    BOOK_NOT_EXISTED(1009,"Book not exist", HttpStatus.NOT_FOUND),
    CATEGORY_NOT_EXISTED(1010,"Category not exist", HttpStatus.NOT_FOUND),
    AUTHOR_NOT_EXISTED(1011,"Author not exist", HttpStatus.NOT_FOUND),
    PUBLISHER_NOT_EXISTED(1011,"Publisher not exist", HttpStatus.NOT_FOUND),
    BORROWING_FORM_NOT_FOUND(1017,"Phiếu mượn không tồn tại", HttpStatus.NOT_FOUND),
    CAN_NOT_REMOVE_CATEGORY(1013,"Cann't remove a category", HttpStatus.BAD_REQUEST),
    BOOK_NOT_AVAILABLE(1014,"Đã hết sách này!", HttpStatus.BAD_REQUEST),
    INVALID_CREDENTIALS(1014,"Mẩu khẩu hoặc email sai!", HttpStatus.BAD_REQUEST),
    WRONG_VERIFY_KEYACTIVE(1012,"Mã xác minh sai", HttpStatus.BAD_REQUEST);

    ErrorCode(int code, String message, HttpStatusCode statusCode){
        this.code = code;
        this.message = message;
        this.statusCode = statusCode;
    }
    private int code;
    private String message;
    private HttpStatusCode statusCode;
}
