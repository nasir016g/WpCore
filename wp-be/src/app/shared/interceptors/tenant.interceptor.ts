import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TenantInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const tenantName = localStorage.getItem('tenantName');
        req = req.clone({
            setHeaders: {
                'Tenant': tenantName
            }
        });

        return next.handle(req);
    }

}