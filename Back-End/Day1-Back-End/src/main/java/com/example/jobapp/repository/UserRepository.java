package com.example.jobapp.repository;

import com.example.jobapp.model.Job;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<Job, Long> {
    boolean existsByEmail(String email);
}
