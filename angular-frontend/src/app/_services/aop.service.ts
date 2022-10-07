import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from './employee';
import {GlobalConstants} from './url';

@Injectable({
  providedIn: 'root'
})
export class AopService {

  private baseURL = 'http://' + GlobalConstants.API_ENDPOINT  + ':8080/aop/logs';

  constructor(private httpClient: HttpClient) { }

  getAopLogs(): Observable<Employee[]>{
    return this.httpClient.get<any>(`${this.baseURL}`);
  }
}
