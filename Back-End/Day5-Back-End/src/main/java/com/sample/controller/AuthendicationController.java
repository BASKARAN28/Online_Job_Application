package com.sample.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sample.dto.AuthRequest;
import com.sample.entity.UserInfo;
import com.sample.repository.*;
import com.sample.service.JwtService;

@RequestMapping("/auth")
@RestController
public class AuthendicationController {

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserInfoRepository repository;

   

    @SuppressWarnings("unused")
    @Autowired
    private UserRepository appUserRepository;

    @PostMapping("/new")
    public String addNewUser(@RequestBody UserInfo userInfo) {
        userInfo.setPassword(passwordEncoder.encode(userInfo.getPassword()));
        repository.save(userInfo);
        // if(userInfo.getRoles().equals("ADMIN"))
        // {
        //     Admin admin=new Admin();
        //     admin.setAname(userInfo.getName());
        //     // admin.setUserinfo(userInfo);
        //     adminrepo.save(admin);
        // }
        // else if(userInfo.getRoles().equals("USER"))
        // {
        //     AppUser app_user=new AppUser();
        //     app_user.setName(userInfo.getName());
        //     app_user.setUserinfo(userInfo);
        //     appUserRepository.save(app_user);
        // }
        return "user added to system ";
    }
    
    @PostMapping("/authenticate")
    public String authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
        if (authentication.isAuthenticated()) {
            return jwtService.generateToken(authRequest.getUsername());
        } else {
            throw new UsernameNotFoundException("invalid user request !"); 
 }
}
}