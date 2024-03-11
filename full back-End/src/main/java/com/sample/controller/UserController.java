package com.sample.controller;

import com.sample.entity.Job;
import com.sample.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    
    @GetMapping("/profile/{id}")
    public ResponseEntity<?> getUserProfile(@PathVariable Long id) {
        // Retrieve user profile details based on the ID
        Job userProfile = userService.getUserProfile(id);
        if (userProfile == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User profile not found for ID: " + id);
        }
        return ResponseEntity.ok(userProfile);
    }
    
    @PutMapping("/profile/{id}")
    public ResponseEntity<?> updateProfile(@PathVariable Long id, @RequestBody Job updatedUser) {
        // Retrieve user profile based on the ID
        Job existingUser = userService.getUserProfile(id);
        if (existingUser == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User profile not found for ID: " + id);
        }

        // Update the user profile with new details
        existingUser.setFirstName(updatedUser.getFirstName());
        existingUser.setLastName(updatedUser.getLastName());
        existingUser.setEmail(updatedUser.getEmail());
        existingUser.setMobile(updatedUser.getMobile());
        existingUser.setCity(updatedUser.getCity());

        // Save the updated user profile
        userService.save(existingUser);

        return ResponseEntity.ok("User profile updated successfully!");
    }
    
    @DeleteMapping("/profile/{id}")
    public ResponseEntity<?> deleteUserProfile(@PathVariable Long id) {
        // Delete user profile based on the ID
        boolean deleted = userService.deleteUserProfile(id);
        if (!deleted) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User profile not found for ID: " + id);
        }
        return ResponseEntity.ok("User profile deleted successfully.");
    }
}
