import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html' 
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  error = '';

  constructor(private router: Router, private auhenticationService: AuthenticationService) { }

  ngOnInit() { }

  loginUser() {
    
    this.auhenticationService.login(this.username, this.password)
      .subscribe(result => {
        if (result === true) {
          this.router.navigate(['/']);
        } else {
          // login failed
          this.error = 'Username or password is incorrect';

        }
      });
  }
}
