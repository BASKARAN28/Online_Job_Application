package com.sample.controller;

import com.sample.entity.JobPo;
import com.sample.service.JobService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/jobs")
public class JobController {

    private final JobService jobService;

    public JobController(JobService jobService) {
        this.jobService = jobService;
    }

    @PostMapping
    public JobPo createJob(@RequestBody JobPo job) {
        return jobService.createJob(job);
    }
    
    @GetMapping
    public List<JobPo> getAllJobs() {
        return jobService.getAllJobs();
    }
    
    @GetMapping("/{id}")
    public JobPo getJobById(@PathVariable Long id) {
        return jobService.getJobById(id);
    }
    
    @DeleteMapping("/{id}")
    public String deleteJobById(@PathVariable Long id) {
        jobService.deleteJobById(id);
        return "Job with ID " + id + " deleted successfully";
    }
}
