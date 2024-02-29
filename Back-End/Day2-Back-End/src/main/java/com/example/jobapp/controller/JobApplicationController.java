package com.example.jobapp.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.example.jobapp.model.JobApplication;
import com.example.jobapp.service.JobApplicationService;

import lombok.AllArgsConstructor;


@AllArgsConstructor
@RestController
@RequestMapping("/api/apply")
public class JobApplicationController {
    private JobApplicationService jaserv;
    @PostMapping
    public ResponseEntity<String> applyJob(@RequestParam("firstName") String firstName,
                                           @RequestParam("lastName") String lastName,
                                           @RequestParam("email") String email,
                                           @RequestParam("mobile") String mobile,
                                           @RequestParam("city") String city,
                                           @RequestParam("education") String education,
                                           @RequestParam("experience") String experience,
                                           @RequestParam("resume") MultipartFile resume) {
        // Handle file upload
        if (resume.isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Resume file is required.");
        }
       
        System.out.println("Received job application:");
        System.out.println("First Name: " + firstName);
        System.out.println("Last Name: " + lastName);
        System.out.println("Email: " + email);
        System.out.println("Mobile: " + mobile);
        System.out.println("City: " + city);
        System.out.println("Education: " + education);
        System.out.println("Experience: " + experience);
        System.out.println("Resume file name: " + resume.getOriginalFilename());
        JobApplication jobapplication=new JobApplication(firstName,lastName,email,mobile,city,education,experience,resume.getOriginalFilename());
        jaserv.saveJobApplication(jobapplication);
        return ResponseEntity.ok("Job application received successfully.");
    }
}