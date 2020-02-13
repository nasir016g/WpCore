import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TenantModel } from './tenant.model';
import { catchError } from 'rxjs/operators';
import {throwError as observableThrowError } from 'rxjs';
import { ServiceBase } from '../../shared/services/serviceBase';


@Injectable({
  providedIn: 'root'
})
export class TenantService extends ServiceBase {
  url = environment.apiUrl + 'admin/tenant/';
  constructor(private http: HttpClient) {
    super();
  }

   getAll() {
     return this.http.get<TenantModel[]>(this.url)
     .pipe(catchError(super.errorHandler));     
   }   
}
