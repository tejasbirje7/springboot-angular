import { Component, OnInit } from '@angular/core';
import {AopService} from '../_services/aop.service';

@Component({
  selector: 'app-aop',
  templateUrl: './aop.component.html',
  styleUrls: ['./aop.component.css']
})
export class AopComponent implements OnInit {

  constructor(private aopService: AopService) { }

  aopLogMap = {};

  ngOnInit(): void {
    this.aopService.getAopLogs().subscribe(data => {
      console.log(data);
      this.aopLogMap = data;
    });
  }

}
