package com.haianh123.library.repository;

import com.haianh123.library.entity.ReturnSlip;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReturnSlipRepository extends JpaRepository<ReturnSlip, Integer> {
}
