import { Injectable } from '@angular/core';
import { ServiceBase } from '../../shared/services/serviceBase';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Expense } from './expense.model';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService extends ServiceBase{

  constructor(private http: HttpClient) {
    super('admin/expense');
  }

  getAll() {
    return this.http.get<Expense[]>(this.url)
    .pipe(catchError(this.errorHandler));
  }
}
