package com.sample.controller;

import org.springframework.web.bind.annotation.*;

import java.util.List;

import com.sample.entity.JobApplication;
import com.sample.service.JobApplicationService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/apply")
@CrossOrigin(origins = "http://localhost:5173/")
public class JobApplicationController {
    private JobApplicationService jaserv;

    @PostMapping
    public String applyJob(@RequestParam("firstName") String firstName,
                           @RequestParam("lastName") String lastName,
                           @RequestParam("email") String email,
                           @RequestParam("mobile") String mobile,
                           @RequestParam("city") String city,
                           @RequestParam("education") String education,
                           @RequestParam("experience") String experience) {
    

        System.out.println("Received job application:");
        System.out.println("First Name: " + firstName);
        System.out.println("Last Name: " + lastName);
        System.out.println("Email: " + email);
        System.out.println("Mobile: " + mobile);
        System.out.println("City: " + city);
        System.out.println("Education: " + education);
        System.out.println("Experience: " + experience);

        JobApplication jobapplication = new JobApplication(firstName, lastName, email, mobile, city, education, experience);
        jaserv.saveJobApplication(jobapplication);
        return "Job application received successfully.";
    }

    @GetMapping("/all")
    public List<JobApplication> getAllJobApplications() {
        return jaserv.getAllJobApplications();
    }
}
