package com.sample.service;

import com.sample.entity.Job;
import com.sample.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @SuppressWarnings("null")
    @Override
    public Job save(Job user) {
        return userRepository.save(user);
    }

    @Override
    public boolean emailExists(String email) {
        return userRepository.existsByEmail(email);
    }
    
    @SuppressWarnings("null")
    @Override
    public Job getUserProfile(Long id) {
        return userRepository.findById(id).orElse(null);
    }
    
    @SuppressWarnings("null")
    @Override
    public boolean deleteUserProfile(Long id) {
        if (userRepository.existsById(id)) {
            userRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
