import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../security/account/shared/authentication.service';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                Authorization: 'Bearer ' + this.authenticationService.token
            }
        });

        return next.handle(req);
    }

}