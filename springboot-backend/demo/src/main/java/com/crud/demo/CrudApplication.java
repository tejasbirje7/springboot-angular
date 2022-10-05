package com.crud.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;

@SpringBootApplication
@Controller
public class CrudApplication implements ErrorController {
	public static void main(String[] args) {
		SpringApplication.run(CrudApplication.class, args);
	}
	private static final String PATH = "/error";

	@RequestMapping(value = PATH)
	@ResponseStatus(HttpStatus.OK)
	public String error() {
		return "forward:/index.html";
	}

	public String getErrorPath() {
		return PATH;
	}

}
