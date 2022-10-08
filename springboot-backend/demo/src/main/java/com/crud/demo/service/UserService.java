package com.crud.demo.service;

import com.crud.demo.entity.JwtResponse;
import com.crud.demo.entity.LoginRequest;
import com.crud.demo.entity.SignupRequest;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Map;

public interface UserService {

    public JwtResponse authenticateUser(LoginRequest loginRequest);

    public Map<String,Object> registerUser(SignupRequest signupRequest);

}
