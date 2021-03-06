import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'ngx-alerts';
import { WebPage } from './webpage.model';

import { WebpageService } from './webpage.service';

@Component({
  selector: 'app-webpage',
  templateUrl: './webpage-detail.component.html'
})

export class WebPageDetailComponent implements OnInit {
  form: FormGroup;
  model: WebPage = new WebPage();

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private pageService: WebpageService) {

    if (this.activatedRoute.snapshot.params['id']) {
      this.model.id = parseInt(this.activatedRoute.snapshot.params['id']);
    }
    this.buildForm(this.formBuilder);
  }

  ngOnInit() {
    if (this.model.id > 0) {
      // edit
      this.pageService.getPageById(this.model.id)
        .subscribe(resp => {
          this.model = resp;
          this.buildForm(this.formBuilder);
        }
          , error => this.alertService.danger(error));
    }
  }

  private buildForm(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      id: this.model.id,
      virtualPath: [this.model.virtualPath, [Validators.required, Validators.minLength(3)]],
      navigationName: [this.model.navigationName, [Validators.required]],
      visible: [this.model.visible],
      allowAnonymousAccess: [this.model.allowAnonymousAccess],
      displayOrder: [this.model.displayOrder],
      metaTitle: [this.model.metaTitle],
      metaDescription: [this.model.metaDescription],
      metaKeywords: [this.model.metaKeywords]
    });
  } 

  cancel() {
    this.router.navigate(['admin/webpage/list']);
  }

  onSubmit() {
    if (this.form.valid) {
      this.pageService.save(this.form.value)
        .subscribe(resp => {
          this.model = resp;
          this.alertService.success('Page updated successfully.')

        }
          // , error => {
          //   for (var fieldName in error.error) {
          //     this.alertService.danger(error.error[fieldName]);
          //   }
          // }
        )
    }
  }
}


