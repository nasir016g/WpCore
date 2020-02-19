import { HttpErrorResponse } from "@angular/common/http";
import {throwError as observableThrowError } from 'rxjs';
import { environment } from '../../../environments/environment';

export class ServiceBase{
  public url: string;
  /**
   *
   */
  constructor(urlPath: string) {
    this.url = environment.apiUrl + urlPath;
  }

   public errorHandler(error: HttpErrorResponse) { 
        console.log(error);  
        return observableThrowError(error || 'Internal server error');
      }

}