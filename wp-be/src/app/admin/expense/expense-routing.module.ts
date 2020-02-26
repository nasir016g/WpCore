import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpenseListComponent } from './expense/expense-list.component';
import { ExpenseDetailComponent } from './expense/expense-detail.component';

const routes: Routes = [
  {path: 'list', component: ExpenseListComponent},
  { path: 'add', component: ExpenseDetailComponent },
  { path: 'edit/:id', component: ExpenseDetailComponent },

];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenseRoutingModule { }
