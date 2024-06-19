package com.haianh123.library.controller;

import com.haianh123.library.dto.response.ResourceDTO;
import com.haianh123.library.service.BookService;
import jakarta.annotation.Resource;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@FieldDefaults(makeFinal = true, level = AccessLevel.PRIVATE)
@RequiredArgsConstructor
public class ExportController {
    BookService bookService;
    @GetMapping("/export")
    public ResponseEntity<Resource> exportProducts() {
        ResourceDTO resourceDTO = bookService.exportExcel();

        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add("Content-Disposition",
                "attachment; filename=" + resourceDTO.getFileName() + ".xlsx");

        return ResponseEntity.ok().contentType(resourceDTO.getMediaType())
                .headers(httpHeaders).body((Resource) resourceDTO.getResource());
    }
}
