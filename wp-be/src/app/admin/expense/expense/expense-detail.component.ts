import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Expense, ExpenseAccount } from '../expense.models';
import { ExpenseService } from './expense.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';
import { ExpenseAccountService } from '../expense-account/expense-account.service';

@Component({
  selector: 'app-expense-detail',
  templateUrl: './expense-detail.component.html'
})
export class ExpenseDetailComponent implements OnInit {
  form: FormGroup;
  model: Expense = new Expense();
  expenseAccounts: Array<ExpenseAccount> = [];
  constructor(private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private expenseService: ExpenseService,
    private expenseAccountService: ExpenseAccountService) {

    if (this.activatedRoute.snapshot.params['id']) {
      this.model.id = parseInt(this.activatedRoute.snapshot.params['id']);
    }
    this.buildForm(this.formBuilder);
  }

  ngOnInit() {

    if (this.model.id > 0) {
      // edit
      this.expenseService.getById(this.model.id)
        .subscribe(resp => {
          this.model = resp;
          this.buildForm(this.formBuilder);
        }
          , error => this.alertService.danger(error));
    }
    this.expenseAccountService.getAll().subscribe(
      rez => this.expenseAccounts = rez);

  }

  private buildForm(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      id: this.model.id,
      name: this.model.name,
      description: this.model.description,
      amount: this.model.amount,
      date: this.model.date,
      notifications: this.model.notifications,
      isDebit: this.model.isDebit,
      code: this.model.code,
      transactionType: this.model.transactionType,
      expenseTags: this.model.expenseTags,
      expenseAccount: this.model.expenseAccount,
      expenseCategory: this.model.expenseCategory

    });
  } cancel() {
    this.router.navigate(['admin/expense/list']);
  }

  onSubmit() {
    if (this.form.valid) {
      var modelToSubmit = this.form.value;
      modelToSubmit.expenseAccount = this.model.expenseAccount;
      this.expenseService.save(this.form.value)
        .subscribe(resp => {
          // this.model = resp;
          this.alertService.success('Expense updated successfully.')

        })
    }
  }

  onChangeExpenseAccount(expenseAccount) {
    var ex = new ExpenseAccount();
    ex.name = expenseAccount;

    this.model.expenseAccount = ex;

  }
}
