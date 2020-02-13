
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http/src/response';

import {throwError as observableThrowError,  Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { WebPage, BaseModel } from './webpage.model';
import { ServiceBase } from '../../shared/services/serviceBase';


@Injectable({
  providedIn: 'root'
})
export class WebpageService extends ServiceBase {
  url = environment.apiUrl + 'admin/webpage/';

  constructor(private http: HttpClient) {
    super();
  }

  getAll() {
    return this.http.get<WebPage[]>(this.url)
    .pipe(catchError(this.errorHandler));
  }

  getPageById(id) {
    return this.http.get<WebPage>(this.url + id)
    .pipe(catchError(this.errorHandler));
  }  

  delete(id) {
    return  this.http.delete(this.url + id)
    .pipe(catchError(this.errorHandler));
  }

  save(t: any) : Observable<any> {
    const model = t as BaseModel; 
    const headers = new HttpHeaders().set('Content-type', 'application/json');    
    if(model.id > 0)
    {
      //edit
      return this.http.put<any>(this.url + model.id, JSON.stringify(model), {
        headers: headers,
      }).pipe(catchError(this.errorHandler))
    } else {
      // new      
      return this.http.post<any>(this.url, JSON.stringify(model), {
        headers: headers,
      }).pipe(catchError(this.errorHandler))
     }
  } 
}
