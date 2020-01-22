import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  tenantName: string;
  username: string;
  password: string;
  error = '';

  constructor(private router: Router, private auhenticationService: AuthenticationService) { }

  ngOnInit() { 
    this.tenantName = localStorage.getItem('tenantName');
  }

  loginUser() {

    this.auhenticationService.login(this.username, this.password)
      .subscribe(result => {
        if (result === true) {
          //window.location.href = "#";
          this.router.navigate(['admin/webpage/list']);
        } else {
          // login failed
          this.error = 'Username or password is incorrect';
        }
      });

  }

  onChange(tenantName) {
    localStorage.setItem('tenantName', tenantName);
    console.log(tenantName);
  }
}
