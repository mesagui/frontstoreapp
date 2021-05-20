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
    this.employeeService.GetEmployee().subscribe((res) => {
      console.log(res);
      this.Employees = res;
    });
  }

  delete(id: any, i: any) {
    console.log(id);
    if (window.confirm('Seguro de eliminar el registro!!!!!')) {
      this.employeeService.DeleteEmployee(id).subscribe((res) => {
        this.Employees.splice(i, 1);
      });
    }
  }
}
