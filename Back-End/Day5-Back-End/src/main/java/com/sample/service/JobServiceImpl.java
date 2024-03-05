package com.sample.service;

import com.sample.entity.JobPo;
import com.sample.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JobServiceImpl implements JobService {

    private final JobRepository jobRepository;

    @Autowired
    public JobServiceImpl(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    @Override
    public JobPo createJob(JobPo job) {
        return jobRepository.save(job);
    }

    @Override
    public List<JobPo> getAllJobs() {
        return jobRepository.findAll();
    }

    @Override
    public JobPo getJobById(Long id) {
        Optional<JobPo> jobOptional = jobRepository.findById(id);
        return jobOptional.orElse(null);
    }

    @Override
    public void deleteJobById(Long id) {
        jobRepository.deleteById(id);
    }
}
