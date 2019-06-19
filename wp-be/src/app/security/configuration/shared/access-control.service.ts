import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ClaimRoleModel } from './claim-role.model';

@Injectable({
  providedIn: 'root'
})
export class AccessControlService {

  url = environment.apiUrl + 'admin/security/claims';
  
  constructor(private http: HttpClient) { }

  getClaims(){
    return this.http.get<ClaimRoleModel>(this.url);
 } 

 update(model: ClaimRoleModel){
   const headers = new HttpHeaders().set('Content-type', 'application/json');
   return this.http.put(this.url, JSON.stringify(model)
   , {headers: headers})
 }
}
