import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ExpenseListComponent } from './expense/expense-list.component';
import { ExpenseRoutingModule } from './expense-routing.module';

@NgModule({
  declarations: [ExpenseListComponent],
  imports: [
    SharedModule,
    ExpenseRoutingModule
  ]
})
export class ExpenseModule { }
