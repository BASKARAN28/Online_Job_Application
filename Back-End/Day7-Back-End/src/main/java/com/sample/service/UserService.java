package com.sample.service;

import com.sample.entity.Job;

public interface UserService {
    Job save(Job user);
    
    boolean emailExists(String email);
    
    Job getUserProfile(Long id);
    
    boolean deleteUserProfile(Long id);
}
