import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WebPageListComponent } from './webpage/webpage-list/webpage-list.component';
import { WebPageDetailComponent } from './webpage/webpage-detail/webpage-detail.component';
import { TooltipModule, TabsModule } from 'ngx-bootstrap';
import { SharedModule } from '../_shared/shared.module';
import { ExcelService } from '../_services/excelService';
import { InstallComponent } from './install/install.component';

export const ROUTES: Routes = [
  {
    path: 'webpage',  
    children: [
      { path: 'list', component: WebPageListComponent },
      { path: 'add', component: WebPageDetailComponent },
      { path: 'edit/:id', component: WebPageDetailComponent },
    ],                
  },
  { path: 'install', component: InstallComponent },
  
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
    WebPageDetailComponent,
    InstallComponent,
  ],
  providers: [ExcelService]

})
export class AdminModule { }
