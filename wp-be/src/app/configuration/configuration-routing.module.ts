import { NgModule } from '@angular/core';
import { AccessControlListComponent } from './access-control-list/access-control-list.component';
import { Routes, RouterModule } from '@angular/router';
import { InstallComponent } from './install/install.component';

const routes: Routes = [
  { path: 'acl', component: AccessControlListComponent},
  { path: 'install', component: InstallComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
