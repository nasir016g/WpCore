import { Component, OnInit, TemplateRef  } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Router } from '@angular/router';
import { AdminWebPage } from './webpage.model';
import { AdminWebpageService } from './webpage.service';
import { ExcelService } from '../../shared/services/excelService';

@Component({
  selector: 'app-webpage-list',
  templateUrl: './webpage-list.component.html'
})
export class WebPageListComponent implements OnInit {
  webpages: Array<AdminWebPage> = [];
  deletingPage: AdminWebPage;
  modalRef: BsModalRef;
  errorMessage: any;

  constructor(private pageService: AdminWebpageService,
    private modalService: BsModalService, private excelService:ExcelService) { }

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

  delete(webpage: AdminWebPage, template: TemplateRef<any>) {
    this.deletingPage = webpage;
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }  
 
  confirm(): void {
    this.pageService.delete(this.deletingPage.id).subscribe(
      () => {
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
