import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../account/authentication.service';
import { AdminWebPage } from '../admin/webpage/webpage.model';
import { Router } from '@angular/router';
import { AdminWebpageService } from '../admin/webpage/webpage.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {
  webpages: Array<AdminWebPage> = [];
  errorMessage: any;
  isCollapsed = true;
  isAuthenticated: boolean
  constructor(private pageService: AdminWebpageService, public authenticationService: AuthenticationService, private router: Router) {
    this.isAuthenticated = authenticationService.isAuthenticated();
  }

  ngOnInit() {
    this.getNavigations();
  }

  getNavigations() {
    this.pageService.getAll().subscribe(
      res => this.webpages = res,
      err => {
        this.errorMessage = err.error
      }
    );
  }  

  logout(event) {
    event.preventDefault;
    this.authenticationService.logout();
    window.location.href = "login";
  }
}
