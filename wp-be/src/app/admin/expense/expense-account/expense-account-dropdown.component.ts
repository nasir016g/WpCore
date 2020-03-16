import { Component, OnInit, Input } from '@angular/core';
import { ExpenseAccountService } from './expense-account.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-expense-account-dropdown',
  templateUrl: './expense-account-dropdown.component.html',
  styles: []
})
export class ExpenseAccountDropdownComponent implements OnInit {

  @Input() public parentForm: FormGroup;
  @Input() single: boolean;

  accounts = [];
  dropdownSettings = {};
   
  constructor(private expenseAccountService: ExpenseAccountService) { }

  ngOnInit() {
    this.dropdownSettings = {
      singleSelection: this.single,
      text: "Select Accounts",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',  
      labelKey: 'name',
      primaryKey: 'name',    
      enableSearchFilter: false,
      classes: "myclass custom-class"
    };

    this.expenseAccountService.getAll().subscribe(
      rez => this.accounts = rez);
  }

}
