import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule, BaseRequestOptions } from '@angular/http'; 
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AlertModule } from 'ngx-alerts';
import {Ng2Webstorage} from 'ngx-webstorage';

// app modules
import { AccountModule } from './account/account.module';

// components
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';

// services
import { UserService } from './services/user.service';

import { AppRouting } from './app.routing';

@NgModule({
  imports: [    
    BrowserModule,
    HttpClientModule,
    HttpModule, 
    BrowserAnimationsModule,   
    AlertModule.forRoot({maxMessages: 5, timeout: 5000}), 
    Ng2Webstorage,  
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
