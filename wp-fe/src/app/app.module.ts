import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebpageComponent } from './webpage/webpage.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: ':id', component: WebpageComponent},
  {path: '',  redirectTo: '/home', pathMatch: 'full'},
  // {
    
  //   path: '',
  //   children:[
  //     { path: 'page/:id', component: WebpageComponent}
  //   ] 
  // },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    WebpageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
