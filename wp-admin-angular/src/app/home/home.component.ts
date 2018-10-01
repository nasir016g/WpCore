import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../_services/user.service';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'  
})

export class HomeComponent implements OnInit {

  greeting: string;

  constructor(private userService: UserService, private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
       this.userService.getGreeting()
      .subscribe(result => {
        this.greeting = result;
      });
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['login']);
  }

}
