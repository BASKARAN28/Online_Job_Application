package com.sample.service;

import com.sample.entity.JobApplication;
import java.util.List;

public interface JobApplicationService {
    JobApplication saveJobApplication(JobApplication jobApplication);
    List<JobApplication> getAllJobApplications();
}
