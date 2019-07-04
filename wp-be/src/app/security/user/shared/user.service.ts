import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = environment.apiUrl + 'admin/security/users';
  constructor(private http: HttpClient) { }

  getUsers(){
    console.log("get users");
     return this.http.get<UserModel[]>(this.url);
  }

  getUserByName(userName: string) {
    return this.http.get<UserModel>(this.url + '/' + userName)
  }

  delete(userName: string)
  {
    return this.http.delete(this.url + '/' + userName);
  }

  create(userModel: UserModel){
    //return this.http.post(this.url + '/' + roleName, null);
     const headers = new HttpHeaders().set('Content-type', 'application/json');
     return this.http.post(this.url, JSON.stringify(userModel)
      , {headers: headers  }
     )
  }

  update(userModel: UserModel){
    //return this.http.post(this.url + '/' + roleName, null);
     const headers = new HttpHeaders().set('Content-type', 'application/json');
     return this.http.post(this.url, JSON.stringify(userModel)
      , {headers: headers  }
     )
  }
}
