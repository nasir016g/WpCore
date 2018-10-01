import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule, CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
import { ControlMessagesComponent } from './components/control-messages.component';



@NgModule({
    imports: [
        CommonModule,
        RouterModule,        
        ModalModule.forRoot(), 
        CollapseModule.forRoot(), 
        BsDropdownModule.forRoot(),
    ],
    declarations: [ControlMessagesComponent],
    providers: [],
    exports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, ControlMessagesComponent]
})
export class SharedModule { }