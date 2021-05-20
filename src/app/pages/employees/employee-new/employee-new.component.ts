import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee/Employee.service';

@Component({
  selector: 'app-employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css'],
})
export class EmployeeNewComponent implements OnInit {
  employeeForm: FormGroup;

  constructor(
    private employeeService: EmployeeService,
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone
  ) {
    this.employeeForm = this.formBuilder.group({
      lastname: [''],
      firstname: [''],
      job: [''],
      phone: [''],
      dni: [''],
      address: [''],
    });
  }

  ngOnInit(): void {}

  onSubmit(): any {
    this.employeeService.AddEmployee(this.employeeForm.value).subscribe(
      () => {
        console.log('Data agregada!');
        this.ngZone.run(() => this.router.navigateByUrl('/employee-list'));
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
