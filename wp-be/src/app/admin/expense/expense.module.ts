import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ExpenseListComponent } from './expense/expense-list.component';
import { ExpenseRoutingModule } from './expense-routing.module';
import { ExpenseDetailComponent } from './expense/expense-detail.component';
import { ExpenseAccountComponent } from './expense-account/expense-account.component';

@NgModule({
  declarations: [ExpenseListComponent, ExpenseDetailComponent, ExpenseAccountComponent],
  imports: [
    SharedModule,
    ExpenseRoutingModule
  ]
})
export class ExpenseModule { }
