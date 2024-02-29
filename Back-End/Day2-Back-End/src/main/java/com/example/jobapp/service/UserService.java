package com.example.jobapp.service;

import com.example.jobapp.model.Job;

public interface UserService {
    Job save(Job user);
    
    boolean emailExists(String email);
}
