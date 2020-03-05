import { Injectable } from '@angular/core';
import { ServiceBase } from '../../../shared/services/serviceBase';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ExpenseTag } from '../expense.models';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BaseModel } from '../../webpage/webpage.model';

@Injectable({
  providedIn: 'root'
})
export class ExpenseTagService extends ServiceBase {

  constructor(private http: HttpClient) {
    super('admin/expenseTag/');
  }

  getAll() {
    return this.http.get<ExpenseTag[]>(this.url)
      .pipe(catchError(this.errorHandler));
  }

  getById(id) {
    return this.http.get<ExpenseTag>(this.url + id)
    .pipe(catchError(this.errorHandler));
  }  

  delete(id) {
    return  this.http.delete(this.url + id)
    .pipe(catchError(this.errorHandler));
  }

  save(t: any) : Observable<any> {
    const model = t as BaseModel; 
    const headers = new HttpHeaders().set('Content-type', 'application/json');    
    if(model.id > 0)
    {
      //edit
      return this.http.put<any>(this.url + model.id, JSON.stringify(model), {
        headers: headers,
      }).pipe(catchError(this.errorHandler))
    } else {
      // new      
      return this.http.post<any>(this.url, JSON.stringify(model), {
        headers: headers,
      }).pipe(catchError(this.errorHandler))
     }
  } 
}
