import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './account/login.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { AccessControlListComponent } from './configuration/access-control-list/access-control-list.component';
import { InstallComponent } from './admin/install/install.component';

const ROUTES: Routes = [
    { path: 'login', component: LoginComponent },   
    { path: 'admin/webpage', canActivate: [AuthGuard],  loadChildren: './admin/webpage/webpage.module#WebpageModule' },
    { path: 'security', canActivate: [AuthGuard],  loadChildren: './security/security.module#SecurityModule' },
    
    { path: 'config/acl', canActivate: [AuthGuard], component: AccessControlListComponent},
    { path: 'install', component: InstallComponent },
      
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const AppRouting = RouterModule.forRoot(ROUTES);