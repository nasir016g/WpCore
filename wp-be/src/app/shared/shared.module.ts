import { NgModule } from '@angular/core';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { ControlMessagesComponent } from './components/control-messages.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TabsModule, TooltipModule, CollapseModule, ModalModule, PaginationModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ConfirmModalComponent } from './components/modals/confirm-modal.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        AngularMultiSelectModule,
        PaginationModule.forRoot(),
        TabsModule.forRoot(),  // must include here (admin)],
        TooltipModule.forRoot(), // must include here (admin)
        CollapseModule.forRoot(),
        ModalModule.forRoot(),
        BsDatepickerModule.forRoot(),
    ],
    declarations: [
        ControlMessagesComponent, 
        ConfirmModalComponent, 
    ],
    entryComponents: [
        ConfirmModalComponent
    ],
    exports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        PaginationModule,
        AngularMultiSelectModule,
        ReactiveFormsModule,
        ControlMessagesComponent,
        TabsModule,
        TooltipModule,
        CollapseModule,
        ModalModule,
        BsDatepickerModule
    ]
})
export class SharedModule { }