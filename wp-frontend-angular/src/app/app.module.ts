import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AlertModule } from 'ngx-alerts';

import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { WebPageComponent } from './web-page/web-page.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HtmlComponent } from './sections/html/html.component';
import { WebPageService } from './_services/webpage.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    WebPageComponent,
    HtmlComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    AngularFontAwesomeModule,
    AppRouting,
    AlertModule.forRoot({maxMessages: 5, timeout: 5000, position: 'right'})
  ],
  providers: [WebPageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
