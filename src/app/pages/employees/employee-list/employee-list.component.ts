import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/Employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  Employees: any = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.GetBooks().subscribe((res) => {
      console.log(res);
      this.Employees = res;
    });
  }
}
