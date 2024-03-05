package com.sample.repository;

import com.sample.entity.JobPo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobRepository extends JpaRepository<JobPo, Long> {
   
}
