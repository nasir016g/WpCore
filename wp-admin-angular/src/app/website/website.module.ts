import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../_guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page/page.component';

export const ROUTES: Routes = [
  {
    path: '',
    children:[
      { path: 'page/:id', component: PageComponent}
    ]   
  },
];

@NgModule({
  declarations: [PageComponent],
  imports: [
    CommonModule,    
    RouterModule.forChild(ROUTES)
  ]
})
export class WebsiteModule { }
