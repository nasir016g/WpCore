import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { TenantService } from '../admin/tenant/tenant.service';
import { TenantModel } from '../admin/tenant/tenant.model';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  tenants: Array<TenantModel> = [];
  tenantName: string;
  username: string;
  password: string;

  constructor(private router: Router, 
    private auhenticationService: AuthenticationService,
    private tenantService: TenantService,
    private alertService: AlertService) { }

  ngOnInit() { 
    this.tenantName = localStorage.getItem('tenantName');
    this.tenantService.getAll().subscribe(
      data => this.tenants = data,      
      err => {
        this.alertService.danger(err);
      }
    );
  }

  loginUser() {
    console.log(this.tenants);
    this.auhenticationService.login(this.username, this.password)
      .subscribe(result => {
        if (result === true) {
          //window.location.href = "#";
          this.router.navigate(['admin/webpage/list']);
        } else {
          // login failed
          this.alertService.danger('Username or password is incorrect');
        }
      });

  }

  onChange(tenantName) {
    localStorage.setItem('tenantName', tenantName);
  }
}
