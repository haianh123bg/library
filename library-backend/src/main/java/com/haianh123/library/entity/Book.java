package com.haianh123.library.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tblbook")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "book_id", nullable = false)
    private int id;

    @Column(name = "book_name", nullable = false, length = 255)
    private String name;

    @Column(name = "book_publishing_year")
    private int publishingYear;

    @Column(name = "book_description", columnDefinition = "TEXT")
    private String description;

    @Column(name = "book_price", precision = 10, scale = 2)
    private BigDecimal price;

    @Column(name = "book_inventory_number", nullable = false)
    private int inventoryNumber;

    @Column(name = "book_page_number", nullable = false)
    private int pageNumber;

    @Column(name = "book_status", length = 50)
    private String status;

    @Column(name = "book_language", length = 50)
    private String language;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @Column(name = "book_weight")
    private float weight;

    @Column(name = "book_size", length = 45)
    private String size;

    @Column(name = "ratings_star")
    private float ratingsStar;

    @ManyToOne(fetch = FetchType.EAGER)
    @JsonIgnore
    @JoinColumn(name = "author_id", nullable = false)
    private Author author;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "category_id", nullable = false)
    @JsonIgnore
    private Category category;

    @ManyToOne(fetch = FetchType.EAGER)
    @JsonIgnore
    @JoinColumn(name = "publisher_id", nullable = false)
    private Publisher publisher;

    @JsonIgnore
    @OneToMany(mappedBy = "book", fetch = FetchType.EAGER, cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Image> images;

    @JsonIgnore
    @OneToMany(mappedBy = "book", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private List<CouponCode> couponCodes;

    @JsonIgnore
    @OneToMany(mappedBy = "book", fetch = FetchType.LAZY,
            cascade = {
            CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH, CascadeType.DETACH
            })
    private List<BorrowingForm> borrowingForms;

    @JsonIgnore
    @OneToMany(mappedBy = "book", fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH, CascadeType.DETACH
            })
    private List<ReturnSlip> returnSlips;
}
