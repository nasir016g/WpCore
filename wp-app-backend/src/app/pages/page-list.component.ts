import { Component, OnInit, TemplateRef  } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Router } from '@angular/router';

import { WebPage } from '../models/webpage.model';
import { PageService } from '../services/page.service';


@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html'
})
export class PageListComponent implements OnInit {
  pages: Array<WebPage> = [];
  deletingPage: WebPage;
  modalRef: BsModalRef;
  errorMessage: any;

  constructor(private pageService: PageService,
    private router: Router, private modalService: BsModalService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.pageService.getAll().subscribe(
      data => this.pages = data,
      err => {
        this.errorMessage = err.error        
      } 
    );
  }

  delete(webpage: WebPage, template: TemplateRef<any>) {
    this.deletingPage = webpage;
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }  
 
  confirm(): void {
    this.pageService.delete(this.deletingPage.id).subscribe(
      resp => {
        this.getAll();
      })   
    this.modalRef.hide();
  }
 
  decline(): void {
    this.deletingPage = null;
    this.modalRef.hide();
  }
}
