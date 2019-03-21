import { Component, OnInit } from '@angular/core';
import { WebPageService, AuthenticationService } from '../_services';
import { WebPage } from '../admin/webpage/shared/webpage.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {
  webpages: Array<WebPage> = [];
  errorMessage: any;
  showAdmin: boolean;
  btnText: string;
  isCollapsed = true;
  isAuthenticated: boolean
  constructor(private pageService: WebPageService, public authenticationService: AuthenticationService, private router: Router) {
    this.isAuthenticated = authenticationService.isAuthenticated();
    this.showAdmin = !this.isAuthenticated;
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

  getBtnText(){
    return this.showAdmin ? 'Website' : 'Admin';
  }

  toggle() {
    this.showAdmin = !this.showAdmin; 
    window.location.href = "#";   
  }

  logout(event) {
    event.preventDefault;
    this.authenticationService.logout();
    window.location.href = "login";
  }

}
