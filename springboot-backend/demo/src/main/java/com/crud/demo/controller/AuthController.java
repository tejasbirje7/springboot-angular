package com.crud.demo.controller;


import com.crud.demo.entity.*;
import com.crud.demo.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Map;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private static final Logger logger = LoggerFactory.getLogger(AuthController.class);

    private UserService userService;

    public AuthController(UserService theUserService) {
        userService = theUserService;
    }


    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        logger.info("Username : {}",loginRequest.getUsername());
        logger.info("Password : {}",loginRequest.getPassword());
        JwtResponse jwt = userService.authenticateUser(loginRequest);
        return ResponseEntity.ok(jwt);
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {

        Map<String,Object> m = userService.registerUser(signUpRequest);
        if (m.get("success").equals(false)){
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse((String) m.get("response")));
        } else {
            return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
        }

    }
}
