import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseRequestOptions, HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AlertModule } from 'ngx-alerts';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AppRouting } from './app.routing';
import { ErrorInterceptor } from './shared/interceptors/error.interceptor';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TenantInterceptor } from './shared/interceptors/tenant.interceptor';
import { AccessControlListComponent } from './configuration/access-control-list/access-control-list.component';
import { InstallComponent } from './admin/install/install.component';
import { ModalModule, CollapseModule } from 'ngx-bootstrap';
import { LoginComponent } from './account/login.component';
import { AuthorizationInterceptor } from './shared/interceptors/authorization.interceptor';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRouting,
    FormsModule,
    ReactiveFormsModule,
    AlertModule.forRoot({ maxMessages: 5, timeout: 5000 }),
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    NavComponent,    
    AccessControlListComponent,

    InstallComponent,   
    LoginComponent
  ],
  providers: [
    BaseRequestOptions,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true, },
    { provide: HTTP_INTERCEPTORS, useClass: TenantInterceptor, multi: true, },
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizationInterceptor, multi: true, }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
