import { NgModule } from '@angular/core';
import { AuthGuard } from './guard/auth.guard';
import { ExcelService } from './services/excelService';
import { ControlMessagesComponent } from './components/control-messages.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [     
    CommonModule,
    ],
    declarations: [ControlMessagesComponent,],
    providers: [AuthGuard, ExcelService],
    exports: [ControlMessagesComponent]
})
export class SharedModule { }