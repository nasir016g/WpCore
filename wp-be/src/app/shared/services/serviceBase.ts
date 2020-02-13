import { HttpErrorResponse } from "@angular/common/http";
import {throwError as observableThrowError } from 'rxjs';

export class ServiceBase{

   public errorHandler(error: HttpErrorResponse) { 
        console.log(error);  
        return observableThrowError(error || 'Internal server error');
      }

}