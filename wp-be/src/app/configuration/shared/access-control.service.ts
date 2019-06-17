import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
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
}
