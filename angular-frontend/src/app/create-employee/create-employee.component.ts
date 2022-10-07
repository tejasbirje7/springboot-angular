import { Component, OnInit } from '@angular/core';
import { Employee } from '../_services/employee';
import { EmployeeService } from '../_services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  noAccess = false;
  constructor(private employeeService: EmployeeService,
              private router: Router) { }

  ngOnInit(): void {
    this.noAccess = false;
  }

  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe( data => {
      console.log(data);
      this.goToEmployeeList();
    },
    error => {
      console.log(error);
      if (error.status > 399 && error.status < 500) {
        this.noAccess = true;
      }
    });
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }
}
