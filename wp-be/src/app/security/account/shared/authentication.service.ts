
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {  
  public token: string;

  constructor(private _http: Http){
    // set token if saved in local storage
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
   }



  login(username: string, password: string): Observable<boolean> {
    
    const url = environment.apiUrl + environment.tokenService;
    var headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');

    return this._http.post(url, { Email: username, Password: password }, { headers: headers }).pipe(
      map((response: Response) => {
        // login successful if there's a jwt token in the response
        let token = response.json() && response.json().token;
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
