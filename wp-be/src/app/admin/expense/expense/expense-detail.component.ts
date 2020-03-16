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
  //expenseAccounts: Array<ExpenseAccount> = [];

  constructor(private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private expenseService: ExpenseService) {

    if (this.activatedRoute.snapshot.params['id']) {
      this.model.id = parseInt(this.activatedRoute.snapshot.params['id']);
    }
    this.buildForm(this.formBuilder);
  }

  ngOnInit() {

    if (this.model.id > 0) {
      // edit
      this.expenseService.getById(this.model.id)
        .subscribe(rez => {
          this.model = rez;
          this.buildForm(this.formBuilder);
        }
          , error => this.alertService.danger(error));
    } 
  }

  private buildForm(formBuilder: FormBuilder) {
    var expenseTags = [];
    if (this.model.expenseTags) {
      expenseTags = this.model.expenseTags.split(", ").map(x => {
        return { "name": x };
      });
    } 
    
    var expenseAccounts = [];
    if(this.model.expenseAccount){
      expenseAccounts = [{"name": this.model.expenseAccount.name}]
    } 
    
    var expenseCategories = [];
    if(this.model.expenseCategory){
      expenseCategories = [{"name": this.model.expenseCategory.name}]
    }  

    this.form = formBuilder.group({
      id: this.model.id,
      name: this.model.name,
      description: this.model.description,
      amount: this.model.amount,
      date: this.model.date,
      expenseTags: [expenseTags], // this.model.expenseTags,
      expenseAccounts: [expenseAccounts],
      expenseCategories: [expenseCategories],
    });
  }

  cancel() {
    this.router.navigate(['admin/expense/list']);
  }

  onSubmit() {
    if (this.form.valid) {
      var modelToSubmit = this.form.value;
      modelToSubmit.expenseAccount = modelToSubmit.expenseAccounts[0]; // single account
      modelToSubmit.expenseCategory = modelToSubmit.expenseCategories[0]; // single category
      modelToSubmit.expenseTags = modelToSubmit.expenseTags.map(x => x.name).join(",");
      this.expenseService.save(this.form.value)
        .subscribe(() =>
          this.alertService.success('Expense updated successfully.')
        )
    }
  }

  onChangeExpenseAccount(name: string) {
    this.model.expenseAccount.name = name;
  }
}
