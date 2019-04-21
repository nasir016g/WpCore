import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit {
  itemList: any = [];
  selectedItems = [];
  settings = {};

  constructor(private http: HttpClient) { }
  ngOnInit() {

      this.settings = {
          text: "Select Countries",
          selectAllText: 'Select All',
          unSelectAllText: 'UnSelect All',
          classes: "myclass custom-class",
          primaryKey: "alpha3Code",
          labelKey: "name",
          noDataLabel: "Search Countries...",
          enableSearchFilter: true,
          searchBy: ['name', 'capital']
      };
  }
  onSearch(evt: any) {
      console.log(evt.target.value);
      this.itemList = [];
      //this.http.get('https://localhost:5001/api/greeting/autocomplete/'+evt.target.value)
      this.http.get('https://restcountries.eu/rest/v2/name/'+evt.target.value+'?fulltext=true')
          .subscribe(res => {
              console.log(res);
              this.itemList = res;
          }, error => {

          });
  }
  onItemSelect(item: any) {
    //this.selectedItems.push(item);
      console.log(item);
      console.log(this.selectedItems);
  }
  OnItemDeSelect(item: any) {
      console.log(item);
      console.log(this.selectedItems);
  }
  onSelectAll(items: any) {
      console.log(items);
  }
  onDeSelectAll(items: any) {
      console.log(items);
  }
}