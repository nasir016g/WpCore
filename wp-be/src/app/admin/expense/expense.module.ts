import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ExpenseListComponent } from './expense/expense-list.component';
import { ExpenseRoutingModule } from './expense-routing.module';
import { ExpenseDetailComponent } from './expense/expense-detail.component';
import { ExpenseAccountComponent } from './expense-account/expense-account.component';
import { ExpenseCategoryComponent } from './expense-category/expense-category.component';
import { ExpenseTagComponent } from './expense-tag/expense-tag.component';
import { ExpenseTagDropdownComponent } from './expense-tag/expense-tag-dropdown.component';
import { ExpenseCategoryDropdownComponent } from './expense-category/expense-category-dropdown.component';
import { ExpenseAccountDropdownComponent } from './expense-account/expense-account-dropdown.component';

@NgModule({
  declarations: [ExpenseListComponent, ExpenseDetailComponent, ExpenseAccountComponent, ExpenseCategoryComponent, ExpenseTagComponent, ExpenseTagDropdownComponent, ExpenseCategoryDropdownComponent, ExpenseAccountDropdownComponent],
  imports: [
    SharedModule,
    ExpenseRoutingModule
  ]
})
export class ExpenseModule { }
