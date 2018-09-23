import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TooltipModule } from 'ngx-bootstrap'; 
import { TabsModule } from 'ngx-bootstrap/tabs';

// components
import { PageListComponent } from './page-list.component';
import { PageDetailComponent } from './page-detail.component';
import { ControlMessagesComponent } from '../shared/components/control-messages.component';

// service
import { PageService } from '../services/page.service';
import { SharedModule } from '../shared/shared.module';


export const ROUTES: Routes = [
  {
    path: '',  
    children: [
      { path: 'list', component: PageListComponent },
      { path: 'add', component: PageDetailComponent },
      { path: 'edit/:id', component: PageDetailComponent },
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
    PageListComponent,
    PageDetailComponent   
  ],
  providers: [PageService]
})



export class PageModule { }
