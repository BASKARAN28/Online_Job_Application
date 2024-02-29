

package com.example.jobapp.controller;

import com.example.jobapp.model.JobPo;
import com.example.jobapp.service.JobService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class JobController {

    private final JobService jobService;

    public JobController(JobService jobService) {
        this.jobService = jobService;
    }

    @PostMapping("/api/jobs")
    public JobPo createJob(@RequestBody JobPo job) {
        return jobService.createJob(job);
        
    }
}
