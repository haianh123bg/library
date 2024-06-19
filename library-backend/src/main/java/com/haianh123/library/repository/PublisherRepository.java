package com.haianh123.library.repository;

import com.haianh123.library.dto.response.PublisherInBookAddResponse;
import com.haianh123.library.entity.Publisher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PublisherRepository extends JpaRepository<Publisher, Integer> {
    @Query(value = "SELECT new com.haianh123.library.dto.response.PublisherInBookAddResponse(p.id, p.name) FROM Publisher p")
    List<PublisherInBookAddResponse> getAllPublishers();
}
