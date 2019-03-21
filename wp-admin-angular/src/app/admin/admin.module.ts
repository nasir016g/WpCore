import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../_guard/auth.guard';
import { WebPageListComponent } from './webpage/webpage-list/webpage-list.component';
import { WebPageDetailComponent } from './webpage/webpage-detail/webpage-detail.component';
import { TooltipModule, TabsModule } from 'ngx-bootstrap';
import { SharedModule } from '../_shared/shared.module';

export const ROUTES: Routes = [
  {
    path: 'webpage',  
    children: [
      { path: 'list', component: WebPageListComponent },
      { path: 'add', component: WebPageDetailComponent },
      { path: 'edit/:id', component: WebPageDetailComponent },
    ],      
  },
];

@NgModule({
  imports: [
    TooltipModule.forRoot(), // must include here
    TabsModule.forRoot(), // must include here
    SharedModule,
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    WebPageListComponent,
    WebPageDetailComponent   
  ],
})
export class AdminModule { }
