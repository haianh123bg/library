package com.haianh123.library.dto.request;

import jakarta.persistence.Lob;
import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ImageRequest {
    private String link;
    private boolean avatar;

    @Lob
    private String data;
}
