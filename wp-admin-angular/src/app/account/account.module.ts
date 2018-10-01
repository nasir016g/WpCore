import { NgModule } from '@angular/core';

import { AuthGuard } from '../_guard/auth.guard';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from '../services/authentication.service';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  imports: [
    SharedModule    
  ],
  declarations: [LoginComponent],
  providers: [
    AuthenticationService,
    AuthGuard
  ]
})
export class AccountModule { }
