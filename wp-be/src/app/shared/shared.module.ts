import { NgModule } from '@angular/core';
import { ControlMessagesComponent } from './components/control-messages.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TabsModule, TooltipModule } from 'ngx-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        TabsModule.forRoot(),  // must include here (admin)],
        TooltipModule.forRoot(), // must include here (admin)
    ],
    declarations: [ControlMessagesComponent,],
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