package com.sample.service;

import com.sample.entity.JobPo;

import java.util.List;

public interface JobService {
    JobPo createJob(JobPo job);
    
    List<JobPo> getAllJobs();
    
    JobPo getJobById(Long id);
    
    void deleteJobById(Long id);
}
