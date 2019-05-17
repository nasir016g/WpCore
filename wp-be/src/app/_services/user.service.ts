
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AuthenticationService } from './authentication.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserService {
  url = environment.apiUrl + 'greeting';
  
  constructor(private http: HttpClient, 
    private auhenticationService: AuthenticationService) { }

  getGreeting() {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.auhenticationService.token);
    return this.http.get(this.url, {headers: headers, responseType: 'text'});
  }
}
