import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../_guard/auth.guard';

export const ROUTES: Routes = [
  {
    path: '',
    children:[
      { path: 'webpage', canActivate: [AuthGuard],  loadChildren: './webpage/webpage.module#WebPageModule'}
    ]   
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class AdminModule { }
