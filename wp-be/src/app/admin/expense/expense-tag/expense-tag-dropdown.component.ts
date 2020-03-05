import { Component, OnInit, Input, Output } from '@angular/core';
import { ExpenseTagService } from './expense-tag.service';
import { FormControl, FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-expense-tag-dropdown',
  templateUrl: './expense-tag-dropdown.component.html',
  styles: []
})
// multi select
export class ExpenseTagDropdownComponent implements OnInit {

  tags = [];
  dropdownSettings = {};
  
  @Input() public parentForm: FormGroup;

  constructor(private expenseTagService: ExpenseTagService) {

    this.dropdownSettings = {
      singleSelection: false,
      text: "Select Tags",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',  
      labelKey: 'name',
      primaryKey: 'name',    
      enableSearchFilter: true,
      classes: "myclass custom-class"
    };

    this.expenseTagService.getAll().subscribe(
      rez => {
        this.tags = rez;
      }
    )    
  }


  ngOnInit() {
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
