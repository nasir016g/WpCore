import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseRequestOptions, HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AlertModule } from 'ngx-alerts';
import { AccountModule } from './account/account.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { AppRouting } from './app.routing';
import { UserService } from './_services/user.service';
import { ErrorInterceptor } from './_helpers/error.intercptor';
import { RoleListComponent } from './security/role/role-list/role-list.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SharedModule } from './_shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    AlertModule.forRoot({ maxMessages: 5, timeout: 5000 }),
    BsDropdownModule.forRoot(),
    AppRouting,
    AccountModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    RoleListComponent,
  ],
  providers: [
    UserService,
    BaseRequestOptions,
    {
      provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
