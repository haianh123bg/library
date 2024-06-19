package com.haianh123.library.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Map;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ExcelMetadataDTO {
    private String tableName;
    private List<String> headers;
    private List<Map<String, String>> datas;
}

