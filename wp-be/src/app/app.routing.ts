import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.guard';
import { LoginComponent } from './account/login.component';

const ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'admin/webpage', canActivate: [AuthGuard], loadChildren: './admin/webpage/webpage.module#WebpageModule' },
    { path: 'security', canActivate: [AuthGuard], loadChildren: './security/security.module#SecurityModule' },
    { path: 'config', canActivate: [AuthGuard], loadChildren: './configuration/configuration.module#ConfigurationModule' },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const AppRouting = RouterModule.forRoot(ROUTES);