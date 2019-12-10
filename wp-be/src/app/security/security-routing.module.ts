import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../shared/guard/auth.guard';
import { RoleListComponent } from './role/role-list.component';
import { UserListComponent } from './user/user-list.component';
import { UserDetailsComponent } from './user/user-details.component';
import { LoginComponent } from '../account/login.component';

const routes: Routes = [
  { path: 'roles', canActivate: [AuthGuard], component: RoleListComponent },
  { path: 'users', canActivate: [AuthGuard], component: UserListComponent },
  { path: 'users/edit/:userName', canActivate: [AuthGuard], component: UserDetailsComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
