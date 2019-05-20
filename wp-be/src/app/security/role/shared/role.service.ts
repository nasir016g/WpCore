import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  url = environment.apiUrl + 'admin/security/roles';
  constructor(private http: HttpClient) { }

  getRoles(){
     return this.http.get<string[]>(this.url + '?Name=Demo2');
  }

  delete(role: string)
  {
    return this.http.delete(this.url + '/' + role);
  }

  create(roleName: string){

    return this.http.post(this.url + '/' + roleName, null);
    // const headers = new HttpHeaders().set('Content-type', 'application/json');
    // return this.http.post(this.url, JSON.stringify(roleName)
    //   , {headers: headers  }
    //  )
  }
}
