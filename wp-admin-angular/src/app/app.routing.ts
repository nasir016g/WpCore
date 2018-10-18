import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './account/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guard';

const ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'webpage', canActivate: [AuthGuard],  loadChildren: './webpages/webpage.module#WebPageModule',
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const AppRouting = RouterModule.forRoot(ROUTES);