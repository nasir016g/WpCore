import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SecurityRoutingModule } from './security-routing.module';
import { RoleListComponent } from './role/role-list.component';
import { UserListComponent } from './user/user-list.component';
import { UserDetailsComponent } from './user/user-details.component';

@NgModule({
  declarations: [
    RoleListComponent,
    UserListComponent,
    UserDetailsComponent,
  ],
  imports: [
    SharedModule,
    SecurityRoutingModule    
  ]
})
export class SecurityModule { }
