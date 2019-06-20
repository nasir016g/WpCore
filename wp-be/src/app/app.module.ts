import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseRequestOptions, HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AlertModule } from 'ngx-alerts';
import { AppComponent } from './app.component';
import { NavComponent } from './admin/nav/nav.component';
import { AppRouting } from './app.routing';
import { ErrorInterceptor } from './shared/interceptors/error.interceptor';
import { RoleListComponent } from './security/role/role-list/role-list.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TenantInterceptor } from './shared/interceptors/tenant.interceptor';
import { UserListComponent } from './security/user/user-list/user-list.component';
import { UserDetailsComponent } from './security/user/user-details/user-details.component';
import { UserService } from './security/user/shared/user.service';
import { AccessControlListComponent } from './security/configuration/access-control-list/access-control-list.component';
import { SharedModule } from './shared/shared.module';
import { WebPageListComponent } from './admin/webpage/webpage-list/webpage-list.component';
import { WebPageDetailComponent } from './admin/webpage/webpage-detail/webpage-detail.component';
import { InstallComponent } from './admin/install/install.component';
import { TooltipModule, TabsModule, ModalModule, CollapseModule } from 'ngx-bootstrap';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './security/account/login/login.component';
import { ControlMessagesComponent } from './shared/components/control-messages.component';
import { AuthorizationInterceptor } from './shared/interceptors/authorization.interceptor';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    AppRouting,
    FormsModule,
    ReactiveFormsModule,
    //AdminModule,
    SharedModule,
    AlertModule.forRoot({ maxMessages: 5, timeout: 5000 }),
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),

    TooltipModule.forRoot(), // must include here (admin)
    TabsModule.forRoot(), // must include here (admin)
  ],
  declarations: [
    AppComponent,
    NavComponent,
    RoleListComponent,
    UserListComponent,
    UserDetailsComponent,
    AccessControlListComponent,

    WebPageListComponent,
    WebPageDetailComponent,
    InstallComponent,

   
    LoginComponent
  ],
  providers: [
    UserService,
    BaseRequestOptions,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true, },
    { provide: HTTP_INTERCEPTORS, useClass: TenantInterceptor, multi: true, },
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizationInterceptor, multi: true, }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
