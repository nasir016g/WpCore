import { NgModule } from '@angular/core';
import { WebpageRoutingModule } from './webpage-routing.module';
import { WebPageDetailComponent } from './webpage-detail.component';
import { WebPageListComponent } from './webpage-list.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    WebPageDetailComponent,
    WebPageListComponent
  ],
  imports: [
    SharedModule,
    WebpageRoutingModule
  ]
})
export class WebpageModule { }
