import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TenantModel } from './tenant.model';
import { catchError } from 'rxjs/operators';
import {throwError as observableThrowError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TenantService {
  url = environment.apiUrl + 'admin/tenant/';
  constructor(private http: HttpClient) {

   }

   getAll() {
     return this.http.get<TenantModel[]>(this.url)
     .pipe(
       catchError(this.errorHandler));     
   }

   errorHandler(error: HttpErrorResponse) { 
    console.log(error);  
    return observableThrowError(error || 'Internal server error');
  }
}
