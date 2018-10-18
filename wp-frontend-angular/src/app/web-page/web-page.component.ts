import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from 'ngx-alerts';

import { WebPageService } from '../_services/webpage.service';
import { WebPage } from '../_models/webpage.model';

@Component({
  selector: 'app-web-page',
  templateUrl: './web-page.component.html',
})
export class WebPageComponent implements OnInit {
  model: WebPage = new WebPage();

  constructor(
    private pageService: WebPageService,
    private alertService: AlertService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    if (this.activatedRoute.snapshot.params['id']) {
      this.model.id = parseInt(this.activatedRoute.snapshot.params['id']);
    }
  }

  ngOnInit() {
    if (this.model.id> 0){
      this.pageService.getPageById(this.model.id)
      .subscribe(resp => {
        this.model = resp;
        console.log(this.model);
        console.log(this.model.sections[0]);
      }

      , error => this.alertService.danger(error.message));
     
    }
  }

}
