import { Component, OnInit } from '@angular/core';
import { AdminWebpageService, AuthenticationService } from '../_services';
import { AdminWebPage } from '../admin/webpage/shared/admin-webpage.model';
import { Router } from '@angular/router';

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
