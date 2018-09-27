import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';


import { environment } from '../../environments/environment';
import { AuthenticationService } from './authentication.service';


@Injectable()
export class UserService {
  url = environment.apiUrl + 'greeting';
  
  constructor(private http: Http, 
    private auhenticationService: AuthenticationService) { }

  getGreeting(): Observable<string> {
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.auhenticationService.token });
    let options = new RequestOptions({ headers: headers });

    return this.http.
      get(this.url, options).
      map((response: Response) => response.text());
  }
}
