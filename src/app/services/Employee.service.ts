import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Employee } from './Employee';

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
  AddBook(data: Employee): Observable<any> {
    let API_URL = `${this.REST_API}/employee/`;
    return this.httpClient.post(API_URL, data);
    //.pipe(catchErro(this.handleError));
  }

  // Get empleados
  GetBooks() {
    return this.httpClient.get(`${this.REST_API}/employee`);
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
