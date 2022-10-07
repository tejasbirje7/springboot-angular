package com.crud.demo.security;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@Component
@ControllerAdvice
public class AccessDenied implements AccessDeniedHandler {

    private static final Logger logger = LoggerFactory.getLogger(AccessDenied.class);

    @Override
    public void handle(HttpServletRequest request, HttpServletResponse response, AccessDeniedException accessDeniedException) throws IOException, ServletException {
        logger.error("[1] Unauthorized error: {}", accessDeniedException.getMessage());
        response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Error: Unauthorized");

    }

    @ExceptionHandler(value = { AccessDeniedException.class })
    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    public ResponseEntity<Map<String,Boolean>> commence(HttpServletRequest request, HttpServletResponse response, AccessDeniedException ex ) throws IOException {
        logger.error("[2] Unauthorized error: {}", ex.getMessage());
        //response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Error: Unauthorized");
        Map<String, Boolean> resp = new HashMap<>();
        resp.put("updated", Boolean.FALSE);
        return new ResponseEntity<>(resp,HttpStatus.UNAUTHORIZED);
    }
}
