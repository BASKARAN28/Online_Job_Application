package com.example.jobapp.service;

import com.example.jobapp.model.JobPo;
import com.example.jobapp.repository.JobRepository;
import org.springframework.stereotype.Service;

@Service
public class JobServiceImpl implements JobService {

    private final JobRepository jobRepository;

    public JobServiceImpl(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    @SuppressWarnings("null")
    @Override
    public JobPo createJob(JobPo job) {
        return jobRepository.save(job);
    }
}
