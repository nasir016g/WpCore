import { Component, OnInit, TemplateRef  } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Router } from '@angular/router';
import { WebPage } from '../shared/webpage.model';
import { WebPageService } from '../shared/webpage.service';
import { HttpClient } from '@angular/common/http';
import { ResponseContentType, Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { ExcelService } from '../../../_services/excelService';

@Component({
  selector: 'app-webpage-list',
  templateUrl: './webpage-list.component.html'
})
export class WebPageListComponent implements OnInit {
  webpages: Array<WebPage> = [];
  deletingPage: WebPage;
  modalRef: BsModalRef;
  errorMessage: any;

  constructor(private pageService: WebPageService,
    private router: Router, private modalService: BsModalService, private excelService:ExcelService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.pageService.getAll().subscribe(
      data => this.webpages = data,
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

  downloadFile() {
    this.excelService.exportExcel('sample-from-server');
  }
}
