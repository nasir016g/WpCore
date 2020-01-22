
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {  
  public token: string;

  constructor(private _http: HttpClient){
    // set token if saved in local storage
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
   }

  login(username: string, password: string): Observable<boolean> {
    
    const url = environment.apiUrl + environment.tokenService;
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json; charset=utf-8');

    return this._http.post<any>(url, { Email: username, Password: password }, { headers: headers })
    .pipe(map(user => {
        // login successful if there's a jwt token in the response
        let token = user && user.token;
        if (token) {
          this.token = token;

          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({username: username, token: token}));
          // return true to indicate successful login
          return true;
        }
        else {
          return false;
        }
      }));
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem('currentUser');
    //use sessionStorage to logout when browser closes

  }
  
  isAuthenticated(): boolean {
    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      return true;
  }
  }
}
