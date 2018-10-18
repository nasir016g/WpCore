import { Routes, RouterModule } from '@angular/router';
import { WebPageComponent } from './web-page/web-page.component';

const ROUTES: Routes = [
    {path: 'webpage/:id', component: WebPageComponent},
    {path: '**', redirectTo: ''}
];

export const AppRouting = RouterModule.forRoot(ROUTES);

