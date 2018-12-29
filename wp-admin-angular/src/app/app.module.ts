import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {  BaseRequestOptions, HttpModule } from '@angular/http'; 
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AlertModule } from 'ngx-alerts';

// app modules
import { AccountModule } from './account/account.module';

// components
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';

// services
import { UserService } from './_services';

import { AppRouting } from './app.routing';

@NgModule({
  imports: [    
    BrowserModule,
    HttpClientModule,
     HttpModule, 
    BrowserAnimationsModule,   
    AlertModule.forRoot({maxMessages: 5, timeout: 5000}), 
    AppRouting,
    AccountModule   
  ],
  declarations: [
    AppComponent,     
    HomeComponent,
    NavComponent,
    FooterComponent
  ],  
  providers: [    
    UserService,    
    BaseRequestOptions   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
