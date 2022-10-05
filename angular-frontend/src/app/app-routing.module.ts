import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {AuthGuard} from './_helpers/auth.guard';

const routes: Routes = [
  {path: 'employees', canActivate: [AuthGuard], component: EmployeeListComponent},
  {path: 'create-employee', canActivate: [AuthGuard], component: CreateEmployeeComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'update-employee/:id', canActivate: [AuthGuard], component: UpdateEmployeeComponent},
  {path: 'employee-details/:id', canActivate: [AuthGuard], component: EmployeeDetailsComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', canActivate: [AuthGuard], component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
