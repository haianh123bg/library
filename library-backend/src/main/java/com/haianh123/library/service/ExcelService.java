package com.haianh123.library.service;

import com.haianh123.library.dto.response.ExcelMetadataDTO;
import com.haianh123.library.dto.response.ResourceDTO;

public interface ExcelService {
    ResourceDTO exportExcel(ExcelMetadataDTO excelMetadataDTO);
}
