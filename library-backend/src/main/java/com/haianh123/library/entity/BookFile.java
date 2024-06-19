package com.haianh123.library.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "tblbook_files")
@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BookFile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long fileId;

    @Column(name = "book_id")
    private Long bookId;

    @Column(name = "file_name")
    private String fileName;

    @Column(name ="upload_date")
    private LocalDateTime uploadDate;
}
