import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './account/login/login.component';
import { AuthGuard } from './_guard/auth.guard';
import { RoleListComponent } from './security/role/role-list/role-list.component';
import { UserListComponent } from './security/user/user-list/user-list.component';
import { UserDetailsComponent } from './security/user/user-details/user-details.component';

const ROUTES: Routes = [
    { path: 'login', component: LoginComponent },   
    { path: 'admin', canActivate: [AuthGuard],  loadChildren: './admin/admin.module#AdminModule' },
    { path: 'security/roles', canActivate: [AuthGuard], component: RoleListComponent},
    { path: 'security/users', canActivate: [AuthGuard], component: UserListComponent},
    { path: 'security/users/edit/:userName', canActivate: [AuthGuard], component: UserDetailsComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const AppRouting = RouterModule.forRoot(ROUTES);