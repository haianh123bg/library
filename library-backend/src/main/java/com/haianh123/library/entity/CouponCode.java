package com.haianh123.library.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tblcoupon_code")
public class CouponCode {

    @Id
    @Column(name = "coupon_code_id", nullable = false)
    private int couponCodeId;

    @Column(name = "coupon_code_count", nullable = false)
    private int couponCodeCount;

    @Column(name = "coupon_code_sale_price", nullable = false, precision = 10, scale = 2)
    private BigDecimal couponCodeSalePrice;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "book_id", nullable = false)
    private Book book;
}
