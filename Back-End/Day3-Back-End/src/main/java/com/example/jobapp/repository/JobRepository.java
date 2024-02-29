package com.example.jobapp.repository;

import com.example.jobapp.model.JobPo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobRepository extends JpaRepository<JobPo, Long> {
   
}
