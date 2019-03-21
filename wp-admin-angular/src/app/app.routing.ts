import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './account/login/login.component';
import { AuthGuard } from './_guard';
import { HomeComponent } from './website/home/home.component';

const ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'admin', canActivate: [AuthGuard],  loadChildren: './admin/admin.module#AdminModule' },
    { path: 'website', loadChildren: './website/website.module#WebsiteModule' },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const AppRouting = RouterModule.forRoot(ROUTES);