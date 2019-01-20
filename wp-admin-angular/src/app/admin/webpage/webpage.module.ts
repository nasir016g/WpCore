import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TooltipModule } from 'ngx-bootstrap'; 
import { TabsModule } from 'ngx-bootstrap/tabs';
import { WebPageListComponent } from './webpage-list/webpage-list.component';
import { WebPageDetailComponent } from './webpage-detail/webpage-detail.component';
import { WebPageService } from './shared/webpage.service';
import { SharedModule } from '../../_shared/shared.module';

export const ROUTES: Routes = [
  {
    path: '',  
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
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    WebPageListComponent,
    WebPageDetailComponent   
  ],
  providers: [WebPageService]
})

export class WebPageModule { }