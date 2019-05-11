import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { WebPage } from './webpage.model';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError as observableThrowError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebpageService { 

  constructor(private http: HttpClient) { }

  getAll() {
    const url = environment.apiUrl + 'admin/webpage/';
    return this.http.get<WebPage[]>(url)
    .pipe(
    catchError(this.errorHandler));
  }

  getPageByVirtualPath(virtualPath) {
    // not from admin area
    const url = environment.apiUrl + 'webpage/';
    return this.http.get<WebPage>(url + virtualPath)

    .pipe(
      catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) { 
    console.log(error);  
    return observableThrowError(error || 'Internal server error');
  }
}