package com.haianh123.library.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.Date;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tblborrowing_form")
public class BorrowingForm {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "borrowing_form_id", nullable = false)
    private int borrowingFormId;

    @Column(name = "borrowing_form_date", nullable = false)
    @Temporal(TemporalType.DATE)
    private Date borrowingFormDate;

    @Column(name = "borrowing_form_type", nullable = false, length = 50)
    private String borrowingFormType;

    @Column(name = "borrowing_form_deposit", nullable = false, precision = 10, scale = 2)
    private BigDecimal borrowingFormDeposit;

    @Column(name = "borrowing_form_due_date", nullable = false)
    @Temporal(TemporalType.DATE)
    private Date borrowingFormDueDate;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "book_id", nullable = false)
    private Book book;

}
