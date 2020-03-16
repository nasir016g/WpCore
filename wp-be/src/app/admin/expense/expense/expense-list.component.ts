import { Component, OnInit } from '@angular/core';
import { ExpenseService } from './expense.service';
import { Expense, ExpenseSearchModel } from '../expense.models';
import { BsModalRef } from 'ngx-bootstrap';
import { AlertService } from 'ngx-alerts';
import { FormGroup, FormBuilder } from '@angular/forms';
import { cursorTo } from 'readline';

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

  //#region searchModel
  get searchModel(): ExpenseSearchModel {
      var sessionSM = JSON.parse(sessionStorage.getItem('expenseSearchModel'));
      if (sessionSM != null) {
        sessionSM.dateFrom = new Date(sessionSM.dateFrom); // ngx datepicker issue (can't read from iso-string: YYYY-MM-DDTHH:mm:ss.sssZ)
        sessionSM.dateTo = new Date(sessionSM.dateTo); // ngx datepicker issue
        if(sessionSM.dateFrom.getFullYear() == 1970){
          sessionSM.dateFrom = null;
        }
        if(sessionSM.dateTo.getFullYear() == 1970){
          sessionSM.dateTo = null;
        }
      } else {
        sessionSM = new ExpenseSearchModel();
      }
      return sessionSM;
    }
   
  //}

  set searchModel(value: ExpenseSearchModel) {
    sessionStorage.setItem('expenseSearchModel', JSON.stringify(value))
  }
  //#endregion

  //#region ctor
  constructor(
    private formBuilder: FormBuilder,
    private expenseService: ExpenseService,
    private alertService: AlertService) {
  }

  ngOnInit() {
    this.buildForm(this.formBuilder);
    this.search();
  }
  //#endregion

  private buildForm(formBuilder: FormBuilder) {
    var sm = this.searchModel;
    this.searchForm = formBuilder.group({
      id: sm.id,
      name: sm.name,
      description: sm.description,
      amount: sm.amount,
      dateFrom: sm.dateFrom,
      dateTo: sm.dateTo,
      expenseTags: [sm.expenseTags,],
      expenseAccounts: [sm.expenseAccounts,],
      expenseCategories: [sm.expenseCategories,],
    });
  }

  search() {
    const modelToSubmit = JSON.parse(JSON.stringify(this.searchForm.value));
    this.searchModel = modelToSubmit; // save searchModel in current session (before preparing)

    // prepare expenseTags
    if (modelToSubmit.expenseTags) {
      modelToSubmit.expenseTags = modelToSubmit.expenseTags.map(x => {
        if(x.hasOwnProperty('name')){
         return x.name //convert objects to string array e.g. ["car-gas", "car-tax"]
        }
        else {
          return x
        }
      }); 
    }

    // prepare expenseAccounts
    if (modelToSubmit.expenseAccounts) {
      modelToSubmit.expenseAccounts = modelToSubmit.expenseAccounts.map(x => {
        if (x.hasOwnProperty('name')) {
          return x.name //convert objects to string array e.g. ["Nasir private", "Nasir ABN Amro"]
        } 
        else {
          return x;
        }
      });
    }

    // prepare expenseCategories
    if (modelToSubmit.expenseCategories) {
      modelToSubmit.expenseCategories = modelToSubmit.expenseCategories.map(x => {
        if(x.hasOwnProperty('name')){
         return x.name //convert objects to string array e.g. ["ATM", "Car"]
        }
        else {
          return x;
        }
      });
    }

    this.expenseService.search(modelToSubmit).subscribe(
      rez => this.expenses = rez.data,
      err => this.alertService.danger(err)
    )
  }

  onSubmit() {
    this.search();
  }

  onClear() {
    this.searchModel = null;
    this.buildForm(this.formBuilder);
    this.search();
  }

  getTotalAmout() {
    var sum = this.expenses.reduce((a, b) => a + b.amount, 0);
    return sum;
  }

  getSumPositive() {
    var positive = this.expenses.filter((a) => a.amount >= 0);
    var sumpositive = positive.reduce((a, b) => a + b.amount, 0);
    return sumpositive;
  }

  getSumNegative() {
    var negative = this.expenses.filter((a) => a.amount < 0)
    var sumNegative = negative.reduce((a, b) => a + b.amount, 0)
    return sumNegative;
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
