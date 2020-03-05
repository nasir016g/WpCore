import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AlertModule } from 'ngx-alerts';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AppRouting } from './app.routing';
import { ErrorInterceptor } from './shared/interceptors/error.interceptor';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TenantInterceptor } from './shared/interceptors/tenant.interceptor';
import { AuthorizationInterceptor } from './shared/interceptors/authorization.interceptor';
import { AccountModule } from './account/account.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouting,
    AccountModule,
    AlertModule.forRoot({ maxMessages: 5, timeout: 5000 }),
    BsDropdownModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    NavComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true, },
    { provide: HTTP_INTERCEPTORS, useClass: TenantInterceptor, multi: true, },
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizationInterceptor, multi: true, }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
