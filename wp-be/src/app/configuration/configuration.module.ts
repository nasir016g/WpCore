import { NgModule } from '@angular/core';
import { ConfigurationRoutingModule } from './configuration-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AccessControlListComponent } from './access-control-list/access-control-list.component';
import { InstallComponent } from './install/install.component';

@NgModule({
  declarations: [
    AccessControlListComponent,
    InstallComponent],
  imports: [
    SharedModule,
    ConfigurationRoutingModule
  ]
})
export class ConfigurationModule { }
