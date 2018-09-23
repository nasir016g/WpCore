import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './account/login/login.component';
import { HomeComponent } from './home/home.component';
import { PageDetailComponent } from './pages/page-detail.component';
import { PageListComponent } from './pages/page-list.component';
import { AuthGuard } from './account/auth.guard';

const ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    {
        path: 'page',
        canActivate: [AuthGuard],
        loadChildren: './pages/page.module#PageModule',
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const AppRouting = RouterModule.forRoot(ROUTES);