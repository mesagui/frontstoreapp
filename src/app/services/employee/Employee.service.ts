import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Employee } from '../../models/Employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  // Node/Express API
  REST_API: string = 'http://localhost:3000/api';

  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {}

  // Add
  AddEmployee(data: Employee): Observable<any> {
    let API_URL = `${this.REST_API}/employee/`;
    return this.httpClient.post(API_URL, data);
  }

  // Get empleados
  GetEmployee() {
    return this.httpClient.get(`${this.REST_API}/employee`);
  }

  /* Get single object
GetBook(id:any): Observable<any> {
  let API_URL = `${this.REST_API}/read-book/${id}`;
  return this.httpClient.get(API_URL, { headers: this.httpHeaders })
    .pipe(map((res: any) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
}*/

  /*// Update
  UpdateEmployee(id: any, data: any): Observable<any> {
    let API_URL = `${this.REST_API}/update-book/${id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders });
    //.pipe(catchError(this.handleError));
  }*/

  // Delete
  DeleteEmployee(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/employee/${id}`;
    return this.httpClient.delete(API_URL, { headers: this.httpHeaders });
  }

  // Error
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
