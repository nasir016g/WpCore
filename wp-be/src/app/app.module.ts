import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseRequestOptions, HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AlertModule } from 'ngx-alerts';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { AppRouting } from './app.routing';
import { ErrorInterceptor } from './_interceptors/error.interceptor';
import { RoleListComponent } from './security/role/role-list/role-list.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SharedModule } from './_shared/shared.module';
import { FormsModule } from '@angular/forms';
import { TenantInterceptor } from './_interceptors/tenant.interceptor';
import { UserListComponent } from './security/user/user-list/user-list.component';
import { UserDetailsComponent } from './security/user/user-details/user-details.component';
import { UserService } from './security/user/shared/user.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    AlertModule.forRoot({ maxMessages: 5, timeout: 5000 }),
    BsDropdownModule.forRoot(),
    AppRouting,
    SharedModule
  ],
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    RoleListComponent,
    UserListComponent,
    UserDetailsComponent,
  ],
  providers: [
    UserService,
    BaseRequestOptions,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true, },
    { provide: HTTP_INTERCEPTORS, useClass: TenantInterceptor, multi: true, }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
