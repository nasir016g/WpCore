import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebPageListComponent } from './webpage-list.component';
import { WebPageDetailComponent } from './webpage-detail.component';

const routes: Routes = [
    { path: 'list', component: WebPageListComponent },
    { path: 'add', component: WebPageDetailComponent },
    { path: 'edit/:id', component: WebPageDetailComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WebpageRoutingModule { }