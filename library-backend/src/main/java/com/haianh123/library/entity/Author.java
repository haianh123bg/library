package com.haianh123.library.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tblauthor")
public class Author {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "author_id", nullable = false)
    private int id;

    @Column(name = "author_name", nullable = false, length = 255)
    private String name;

    @Column(name = "author_date_of_birth")
    private LocalDate dateOfBirth;

    @Column(name = "author_description", columnDefinition = "TEXT")
    private String description;

    @Lob
    @Column(name = "author_image", columnDefinition = "LONGTEXT")
    private String image;

    @Column(name = "author_total_book")
    private int totalBook;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @OneToMany(mappedBy = "author",orphanRemoval = false)
    @JsonIgnore
    private List<Book> books;


}