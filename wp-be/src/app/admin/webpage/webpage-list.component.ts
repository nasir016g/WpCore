import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { WebPage } from './webpage.model';
import { WebpageService } from './webpage.service';
import { ExcelService } from '../../shared/services/excelService';
import { ConfirmModalComponent } from '../../shared/components/modals/confirm-modal.component';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-webpage-list',
  templateUrl: './webpage-list.component.html'
})
export class WebPageListComponent implements OnInit {
  webpages: Array<WebPage> = [];
  deletingPage: WebPage;
  bsModalRef: BsModalRef;
  errorMessage: any;

  constructor(
    private pageService: WebpageService, 
    private alertService: AlertService,
    private bsModalService: BsModalService, 
    private excelService: ExcelService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.pageService.getAll().subscribe(
      data => this.webpages = data,
      err => {
        this.alertService.danger(err);
      }
    );
  }

  delete(webpage: WebPage) {
    this.deletingPage = webpage;
    this.bsModalRef = this.bsModalService.show(ConfirmModalComponent)
    this.bsModalRef.content.confirmEvent.subscribe((data: any) => {
      if (data) {
        this.pageService.delete(this.deletingPage.id).subscribe(
          () => {
            this.getAll();
          })
      }
      else {
        this.deletingPage = null;
      }
    });
  } 

  downloadFile() {
    this.excelService.exportExcel('sample-from-server');
  }
}
