import { Component, OnInit } from '@angular/core';
import { ExpenseService } from './expense.service';
import { Expense, ExpenseSearchModel } from '../expense.models';
import { BsModalRef } from 'ngx-bootstrap';
import { AlertService } from 'ngx-alerts';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html'
})
export class ExpenseListComponent implements OnInit {
  expenses: Array<Expense> = [];
  deletingExpense: Expense;
  bsModalRef: BsModalRef;
  isCollapsed = false;

  searchForm: FormGroup;
  searchModel: ExpenseSearchModel = new ExpenseSearchModel();

  constructor(
    private formBuilder: FormBuilder,
    private expenseService: ExpenseService,
    private alertService: AlertService) {
    this.buildForm(this.formBuilder);
  }

  ngOnInit() {
    this.search();
  }

  private buildForm(formBuilder: FormBuilder) {
    // var expenseTags = [];
    // if(this.model.expenseTags){
    //   expenseTags = this.model.expenseTags.split(", ").map(x => {
    //     return {"name": x};       
    //    });
    // }

    this.searchForm = formBuilder.group({
      id: this.searchModel.id,
      name: this.searchModel.name,
      description: this.searchModel.description,
      amount: this.searchModel.amount,
      dateFrom: this.searchModel.dateFrom,
      dateTo: this.searchModel.dateTo,
      expenseTags: [[], ], 
      expenseCategories: [[],],
      //expenseAccount: this.model.expenseAccount,
      //expenseCategory: this.model.expenseCategory

    });
  }  

  search() {
    var searchModel = this.searchForm.value;
    searchModel.expenseTags = searchModel.expenseTags.map(x => x.name).join(",");
    searchModel.expenseCategories = searchModel.expenseCategories.map(x => x.name);
    this.expenseService.search(searchModel).subscribe(
      rez => this.expenses = rez.data,
      err => this.alertService.danger(err)
    )
  }

  onSubmit(){
    this.search();
  }

  public uploadFile(files) {
    if (files.length === 0) {
      return;
    }

    let fileToUpload = <File>files[0];
    this.expenseService.uploadFile(fileToUpload).subscribe(
      rez => this.search(),
      err => this.alertService.danger(err)
    )
  }
}
