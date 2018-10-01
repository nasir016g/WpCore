
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError } from 'rxjs/operators';



import { HttpErrorResponse } from '@angular/common/http/src/response';

import { environment } from '../../environments/environment';
import { WebPage, BaseModel } from '../_models/webpage.model';


@Injectable()
export class WebPageService {
  url = environment.apiUrl + 'admin/webpage/';

  constructor(private _http: HttpClient) { }

  getAll() {
    return this._http.get<WebPage[]>(this.url)
    .pipe(
    catchError(this._errorHandler));
  }

  getPageById(id) {
    return this._http.get<WebPage>(this.url + id)

    .pipe(
      catchError(this._errorHandler));
  }

  delete(id) {
    return  this._http.delete(this.url + id)
    .pipe(
      catchError(this._errorHandler));
  }

  save<tt>(t: any) : Observable<tt> {
    const model = t as BaseModel;     
    if(model.id > 0)
    {
      //edit
      return this._http.put<tt>(this.url + model.id, JSON.stringify(model), {
        headers: new HttpHeaders().set('Content-type', 'application/json'),
      })
      .pipe(
        catchError(this._errorHandler))
    } else {
      // new      
      return this._http.post<tt>(this.url, JSON.stringify(model), {
        headers: new HttpHeaders().set('Content-type', 'application/json'),
      })
      .pipe(
        catchError(this._errorHandler))
     }
  }

  _errorHandler(error: HttpErrorResponse) {    
    return observableThrowError(error || 'Internal server error');
  }

}
