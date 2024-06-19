package com.haianh123.library.repository;

import com.haianh123.library.entity.CouponCode;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CouponCodeRepository extends JpaRepository<CouponCode, Integer> {
}
