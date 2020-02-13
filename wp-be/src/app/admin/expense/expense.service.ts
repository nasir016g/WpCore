import { Injectable } from '@angular/core';
import { ServiceBase } from '../../shared/services/serviceBase';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService extends ServiceBase{

  constructor(private http: HttpClient) {
    super();
  }

  getAll() {
    return this.http.get
  }
}
