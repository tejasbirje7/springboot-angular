package com.crud.demo.controller;

import com.crud.demo.aspect.LoggingAspect;
import com.crud.demo.entity.Employee;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class DemoController {
	
	@GetMapping("/hello")
	public String sayHello(Model theModel) {
		theModel.addAttribute("theDate", new java.util.Date());
		return "helloworld";
	}

	// This acts as an init method.
	// It is always invoked before defined paths in controller are requested
	@ModelAttribute("myRequestObject")
	public Employee init() {
		Employee bean = new Employee();
		return bean;
	}

	@GetMapping("/aop/logs")
	public Map<Long,String> returnAopLogs(){
		return LoggingAspect.getAopMAP();
	}



}








