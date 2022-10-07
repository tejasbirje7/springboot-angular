import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from './employee';

@Injectable({
  providedIn: 'root'
})
export class AopService {

  private baseURL = 'http://localhost:8080/aop/logs';

  constructor(private httpClient: HttpClient) { }

  getAopLogs(): Observable<Employee[]>{
    return this.httpClient.get<any>(`${this.baseURL}`);
  }
}
