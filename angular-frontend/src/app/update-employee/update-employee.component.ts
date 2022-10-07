import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../_services/employee.service';
import { Employee } from '../_services/employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id: number;
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService,
              private route: ActivatedRoute,
              private router: Router) { }
  noAccess : boolean = false;

  ngOnInit(): void {
    this.noAccess = false;
    this.id = this.route.snapshot.params.id;

    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(
      data => { this.goToEmployeeList(); },
      error => {
        console.log(error.status);
        if (error.status > 399 && error.status < 500) {
          this.noAccess = true;
          console.log('No Access');
        }
      }
      );
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
}
