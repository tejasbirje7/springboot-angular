package com.crud.demo.service;

import com.crud.demo.entity.Employee;

import java.util.List;

public interface EmployeeService {

	public List<Employee> findAll();
	
	public Employee findById(int theId);
	
	public Employee save(Employee theEmployee);
	
	public void deleteById(int theId);

	public List<Employee> searchBy(String theName);
	
}
