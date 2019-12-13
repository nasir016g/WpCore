import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html'
})
export class ConfirmModalComponent implements OnInit {

  @Output()
  confirmEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }  
 
  confirm(): void {
    this.confirmEvent.emit(true);
    this.bsModalRef.hide();
  }
 
  decline(): void {
    this.confirmEvent.emit(false);
    this.bsModalRef.hide();
  }
}
