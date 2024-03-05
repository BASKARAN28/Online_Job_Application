package com.sample.repository;

import com.sample.entity.Job;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<Job, Long> {
    boolean existsByEmail(String email);
}
