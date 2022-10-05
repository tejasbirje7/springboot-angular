package com.crud.demo.controller;

import com.crud.demo.entity.Employee;
import com.crud.demo.exception.ResourceNotFoundException;
import com.crud.demo.service.EmployeeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/v1")
public class EmployeeController {

    private EmployeeService employeeService;

    public EmployeeController(EmployeeService theEmployeeService) {
        employeeService = theEmployeeService;
    }

    @GetMapping("/employees")
    public List<Employee> listEmployees(){
        return employeeService.findAll();
    }

    // create employee rest api
    @PostMapping("/employees")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public Employee saveEmployee(@RequestBody Employee theEmployee) {
        return employeeService.save(theEmployee);
    }

    // get employee by id rest api
    @GetMapping("/employees/{id}")
    public ResponseEntity<Object> getEmployeeById(@PathVariable int id) {
        Employee employee = null;
        try {
            employee = employeeService.findById(id);
        } catch (ResourceNotFoundException ex) {
            Map<String,Object> errors = new HashMap<>();
            errors.put("error",ex.getMessage());
            return new ResponseEntity<>(errors,HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok(employee);
    }

    // update employee rest api
    @PutMapping("/employees/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN') || hasRole('ROLE_MANAGER')")
    public ResponseEntity<Object> updateEmployee(@PathVariable int id, @RequestBody Employee employeeDetails) {
        Employee employee = null;
        try {
            employee = employeeService.findById(id);
        } catch (ResourceNotFoundException ex) {
            Map<String,Object> errors = new HashMap<>();
            errors.put("error",ex.getMessage());
            return new ResponseEntity<>(errors,HttpStatus.NOT_FOUND);
        }
        employee.setFirstName(employeeDetails.getFirstName());
        employee.setLastName(employeeDetails.getLastName());
        employee.setEmail(employeeDetails.getEmail());
        Employee updatedEmployee = employeeService.save(employee);
        return ResponseEntity.ok(updatedEmployee);
    }

    // delete employee rest api
    @DeleteMapping("/employees/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable int id){
        Employee employee = employeeService.findById(id);
        employeeService.deleteById(employee.getId());
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
