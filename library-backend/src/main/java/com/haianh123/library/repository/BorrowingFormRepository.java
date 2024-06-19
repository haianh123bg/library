package com.haianh123.library.repository;

import com.haianh123.library.entity.BorrowingForm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BorrowingFormRepository extends JpaRepository<BorrowingForm, Integer> {

    @Query(value = "SELECT b FROM BorrowingForm b WHERE b.book.name LIKE %:key% OR b.user.userAccountName LIKE %:key%")
    Optional<List<BorrowingForm>> findByKey(@Param("key") String key);

    @Query(value = "SELECT COUNT(*) FROM BorrowingForm b WHERE b.user.userAccountName = :userAccountName")
    Integer findCountBorrowingFormByUserAccountName(@Param(value = "userAccountName") String userAccountName);
}
