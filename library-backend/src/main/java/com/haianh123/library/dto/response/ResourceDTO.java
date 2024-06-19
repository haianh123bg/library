package com.haianh123.library.dto.response;

import lombok.Data;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;

@Data
public class ResourceDTO {
    private Resource resource;
    private MediaType mediaType;
    private String fileName;
}
