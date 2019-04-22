import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../../environments/environment.prod';
import { WebPage } from './webpage.model';
import { catchError } from 'rxjs/operators';
import { throwError as observableThrowError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebpageService {

  url = environment.apiUrl + 'webpage/';

  constructor(private http: HttpClient) { }

  getPageByVirtualPath(virtualPath) {
    // not from admin area
    return this.http.get<WebPage>(this.url + virtualPath)

    .pipe(
      catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) { 
    console.log(error);  
    return observableThrowError(error || 'Internal server error');
  }
}

