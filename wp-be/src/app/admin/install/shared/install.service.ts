import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InstallService {
url = environment.apiUrl + 'install'
  constructor(private http: HttpClient) { }

  installData(){
    return this.http.get<string>(this.url);
 }
}
