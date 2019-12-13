import { NgModule } from '@angular/core';
import { ControlMessagesComponent } from './components/control-messages.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TabsModule, TooltipModule } from 'ngx-bootstrap';
import { ConfirmModalComponent } from './components/modals/confirm-modal.component';

@NgModule({
    imports: [
        CommonModule,
        TabsModule.forRoot(),  // must include here (admin)],
        TooltipModule.forRoot(), // must include here (admin)
    ],
    declarations: [
        ControlMessagesComponent, 
        ConfirmModalComponent
    ],
    entryComponents: [
        ConfirmModalComponent
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ControlMessagesComponent,
        TabsModule,
        TooltipModule,
    ]
})
export class SharedModule { }