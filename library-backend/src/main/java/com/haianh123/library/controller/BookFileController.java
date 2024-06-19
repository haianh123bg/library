package com.haianh123.library.controller;

import com.haianh123.library.dto.response.ResponseMessage;
import com.haianh123.library.entity.BookFile;
import com.haianh123.library.service.BookFileService;
import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@RestController
@RequestMapping("/api/files")
public class BookFileController {

    @Autowired
    BookFileService bookFileService;
    @PostMapping("/upload")
    public ResponseEntity<ResponseMessage> uploadFile(@RequestParam("file") MultipartFile file, @RequestParam("bookId") Long bookId) {
        String message = "";
        try {
            bookFileService.save(file,bookId);

            message = "Uploaded the file successfully: " + file.getOriginalFilename();
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
        } catch (Exception e) {
            message = "Could not upload the file: " + file.getOriginalFilename() + ". Error: " + e.getMessage();
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
        }
    }
    @GetMapping("/download/{filename:.+}")
    @ResponseBody
    public ResponseEntity<Resource> getFile(@PathVariable String filename) {
        // Find BookFile by fileName to get bookId
        BookFile bookFile = bookFileService.findByFileName(filename);

        if (bookFile != null) {
            Long bookId = bookFile.getBookId();
            Resource resource = bookFileService.load(filename);

            if (resource != null && resource.exists() && resource.isReadable()) {
                String fileExtension = FilenameUtils.getExtension(filename);
                String uniqueFileName = generateUniqueFileName(bookId, fileExtension);

                return ResponseEntity.ok()
                        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + uniqueFileName + "\"")
                        .body(resource);
            }
        }

        return ResponseEntity.notFound().build();
    }

    private String generateUniqueFileName(Long bookId, String fileExtension) {
        String timestamp = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddHHmmss"));
        return bookId + "_" + timestamp + "." + fileExtension;
    }
}
