import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page/page.component';
import { HtmlContentComponent } from './sections/html-content/html-content.component';

export const ROUTES: Routes = [
  {
    path: '',
    children:[
      { path: 'page/:id', component: PageComponent}
    ]   
  },
];

@NgModule({
  declarations: [PageComponent, HtmlContentComponent],
  imports: [
    CommonModule,    
    RouterModule.forChild(ROUTES)
  ]
})
export class WebsiteModule { }
