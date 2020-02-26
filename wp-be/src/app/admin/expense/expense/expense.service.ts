import { Injectable } from '@angular/core';
import { ServiceBase } from '../../../shared/services/serviceBase';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Expense } from '../expense.models';
import { Observable } from 'rxjs';
import { BaseModel } from '../../webpage/webpage.model';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService extends ServiceBase {

  constructor(private http: HttpClient) {
    super('admin/expense/');
  }

  getAll() {
    return this.http.get<Expense[]>(this.url)
      .pipe(catchError(this.errorHandler));
  }

  uploadFile(fileToUpload: File) {
    const formData = new FormData();
    formData.append('importexcelfile', fileToUpload, fileToUpload.name);
    return this.http.post(this.url + "ImportFromXlsx", formData)
  }

  getById(id) {
    return this.http.get<Expense>(this.url + id)
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
