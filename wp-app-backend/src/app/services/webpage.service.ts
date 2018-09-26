import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpErrorResponse } from '@angular/common/http/src/response';

import { environment } from '../../environments/environment';
import { WebPage, BaseModel } from '../models/webpage.model';


@Injectable()
export class WebPageService {
  url = environment.apiUrl + 'admin/webpage/';

  constructor(private _http: HttpClient) { }

  getAll() {
    return this._http.get<WebPage[]>(this.url)
    // .map((response: Response) => response.json())
    .catch(this._errorHandler);
  }

  getPageById(id) {
    return this._http.get<WebPage>(this.url + id)
            // .map((response: Response) => response.json())
            .catch(this._errorHandler);
  }

  delete(id) {
    return  this._http.delete(this.url + id)
    .catch(this._errorHandler);
  }

  save(t: any) {
    const model = t as BaseModel;     
    if(model.id > 0)
    {
      //edit
      return this._http.put(this.url + model.id, JSON.stringify(model), {
        headers: new HttpHeaders().set('Content-type', 'application/json'),
      })
      .catch(this._errorHandler)
    } else {
      // new      
      return this._http.post(this.url, JSON.stringify(model), {
        headers: new HttpHeaders().set('Content-type', 'application/json'),
      })
      .catch(this._errorHandler)
     }
  }

  _errorHandler(error: HttpErrorResponse) {    
    return Observable.throw(error || 'Internal server error');
  }

}
