import { NgModule } from '@angular/core';
import { AuthGuard } from './guard/auth.guard';
import { ExcelService } from './services/excelService';

@NgModule({
    imports: [      
    ],
    declarations: [],
    providers: [AuthGuard, ExcelService],
    exports: []
})
export class SharedModule { }