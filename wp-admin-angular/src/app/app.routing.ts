import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './account/login/login.component';
import { AuthGuard } from './_guard';
import { RoleListComponent } from './security/role/role-list/role-list.component';

const ROUTES: Routes = [
    { path: 'login', component: LoginComponent },   
    { path: 'admin', canActivate: [AuthGuard],  loadChildren: './admin/admin.module#AdminModule' },
    { path: 'security/roles', canActivate: [AuthGuard], component: RoleListComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const AppRouting = RouterModule.forRoot(ROUTES);