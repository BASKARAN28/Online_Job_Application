package com.example.jobapp.controller;

import com.example.jobapp.model.Job;
import com.example.jobapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<?> signUp(@RequestBody Job newUser) {
        // Check if email already exists
        if (userService.emailExists(newUser.getEmail())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email address is already taken.");
        }

        // Proceed with sign-up process
        userService.save(newUser);
        return ResponseEntity.ok("User signed up successfully!");
    }
}
