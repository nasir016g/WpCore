import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './security/account/login/login.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { RoleListComponent } from './security/role/role-list/role-list.component';
import { UserListComponent } from './security/user/user-list/user-list.component';
import { UserDetailsComponent } from './security/user/user-details/user-details.component';
import { AccessControlListComponent } from './configuration/access-control-list/access-control-list.component';
import { WebPageListComponent } from './admin/webpage/webpage-list/webpage-list.component';
import { WebPageDetailComponent } from './admin/webpage/webpage-detail/webpage-detail.component';
import { InstallComponent } from './admin/install/install.component';

const ROUTES: Routes = [
    { path: 'login', component: LoginComponent },   
    // { path: 'admin', canActivate: [AuthGuard],  loadChildren: './admin/admin.module#AdminModule' },
    { path: 'security/roles', canActivate: [AuthGuard], component: RoleListComponent},
    { path: 'security/users', canActivate: [AuthGuard], component: UserListComponent},
    { path: 'security/users/edit/:userName', canActivate: [AuthGuard], component: UserDetailsComponent},

    { path: 'config/acl', canActivate: [AuthGuard], component: AccessControlListComponent},

    {
        path: 'admin/webpage',  
        children: [
          { path: 'list', component: WebPageListComponent },
          { path: 'add', component: WebPageDetailComponent },
          { path: 'edit/:id', component: WebPageDetailComponent },
        ],                
      },
      { path: 'install', component: InstallComponent },
      
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const AppRouting = RouterModule.forRoot(ROUTES);