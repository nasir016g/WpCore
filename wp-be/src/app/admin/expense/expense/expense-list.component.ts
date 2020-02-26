import { Component, OnInit } from '@angular/core';
import { ExpenseService } from './expense.service';
import { Expense } from '../expense.models';
import { BsModalRef } from 'ngx-bootstrap';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html'
})
export class ExpenseListComponent implements OnInit {
  expenses: Array<Expense> = [];
  deletingExpense: Expense;
  bsModalRef: BsModalRef;

  constructor(
    private expenseService: ExpenseService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.expenseService.getAll().subscribe(
      data => this.expenses = data,
      err => this.alertService.danger(err)
    )
  }

  public uploadFile(files){
    if(files.length === 0){
      return;
    }

    let fileToUpload = <File>files[0];
    this.expenseService.uploadFile(fileToUpload).subscribe(
      data => this.getAll(),
      err => this.alertService.danger(err)
    )
  }
}
