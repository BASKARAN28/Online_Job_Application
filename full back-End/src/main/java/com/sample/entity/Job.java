package com.sample.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter

public class Job {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstName;
    private String lastName;
    private String email;
    private String mobile;
    private String city;
    private String password; // New field for password
    private String confirmPassword; // New field for confirming password

    public Job() {
    }

    public Job(String firstName, String lastName, String email, String mobile, String city, String password, String confirmPassword) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.mobile = mobile;
        this.city = city;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }

   
}
