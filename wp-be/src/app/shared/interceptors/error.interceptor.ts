import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthenticationService } from '../../account/authentication.service';
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService, private alertService: AlertService, private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if ([401, 403].indexOf(err.status) !== -1) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                this.authenticationService.logout();
                this.router.navigate(['/login']);
             //   location.reload(true);
            }

           // const error = err.error || err.statusText;
            for (var fieldName in err.error) {
                this.alertService.danger(err.error[fieldName]);
              }
            return throwError(err);
        }))
    }
}