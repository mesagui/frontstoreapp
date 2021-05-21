import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { Product } from '../../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  REST_API: string = 'http://localhost:3000/api';

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  //List
  ListProduct(){
    return this.httpClient.get(`${this.REST_API}/products`);
  }

  //Add
  AddProduct(data: Product):Observable<any>{
    let API_URL = `${this.REST_API}/products/`;
    return this.httpClient.post(API_URL, data);
  }

  DeleteProduct(id: any): Observable<any>{
    let API_URL = `${this.REST_API}/products/${id}`;
    return this.httpClient.delete(API_URL, {headers: this.httpHeaders});
  }

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
