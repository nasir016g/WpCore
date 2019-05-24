import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WebPageListComponent } from './webpage/webpage-list/webpage-list.component';
import { WebPageDetailComponent } from './webpage/webpage-detail/webpage-detail.component';
import { TooltipModule, TabsModule } from 'ngx-bootstrap';
import { InstallComponent } from './install/install.component';
 import { SharedModule } from '../shared/shared.module';

// export const ROUTES: Routes = [
//   {
//     path: 'webpage',  
//     children: [
//       { path: 'list', component: WebPageListComponent },
//       { path: 'add', component: WebPageDetailComponent },
//       { path: 'edit/:id', component: WebPageDetailComponent },
//     ],                
//   },
//   { path: 'install', component: InstallComponent },
  
// ];

@NgModule({
  imports: [
    // TooltipModule.forRoot(), // must include here
    // TabsModule.forRoot(), // must include here
    //SharedModule,
    // CommonModule,
    //RouterModule.forChild(ROUTES)
  ],
  declarations: [
    // WebPageListComponent,
    // WebPageDetailComponent,
    // InstallComponent,
  ],
  providers: []

})
export class AdminModule { }
