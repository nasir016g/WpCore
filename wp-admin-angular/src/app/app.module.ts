import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BaseRequestOptions, HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AlertModule } from 'ngx-alerts';
import { AccountModule } from './account/account.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { AppRouting } from './app.routing';
import { UserService } from './_services/user.service';
import { HomeComponent } from './website/home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    AlertModule.forRoot({ maxMessages: 5, timeout: 5000 }),
    AppRouting,
    AccountModule
  ],
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
  ],
  providers: [
    UserService,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
