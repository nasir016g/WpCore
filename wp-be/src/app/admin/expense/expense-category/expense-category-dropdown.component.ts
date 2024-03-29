import { Component, OnInit, Input } from '@angular/core';
import { ExpenseCategoryService } from './expense-category.service';
import { ExpenseCategory, Expense } from '../expense.models';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-expense-category-dropdown',
  templateUrl: './expense-category-dropdown.component.html',
  styles: []
})
export class ExpenseCategoryDropdownComponent implements OnInit {

  @Input() public parentForm: FormGroup;
  @Input() single: boolean;

  categories = [];
  settings = {}; 

  constructor(private expenseCategoryService: ExpenseCategoryService) {  
   }

  ngOnInit() {

    this.settings = {
      singleSelection: this.single,
      text: "Select Categories",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',  
      labelKey: 'name',
      primaryKey: 'name',    
      enableSearchFilter: false,
      groupBy: (this.single ? "" : "category"),
      badgeShowLimit: 5,
      //enableCheckAll: false,
      classes: "myclass custom-class"
    };

    this.expenseCategoryService.getAll().subscribe(
      rez => this.categories = rez);
  }

  onItemSelect(item: any) {   
  }
  OnItemDeSelect(item: any) {    
  }
  onSelectAll(items: any) {
  }
  onDeSelectAll(items: any) {
  }

}
