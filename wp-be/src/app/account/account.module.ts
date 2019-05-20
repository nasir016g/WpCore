import { NgModule } from '@angular/core';

import { AuthGuard } from '../_guard/auth.guard';
// import { AuthenticationService } from '../_services/authentication.service';
import { SharedModule } from '../_shared/shared.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    SharedModule    
  ],
  declarations: [LoginComponent],
  providers: [
   // AuthenticationService,
    AuthGuard
  ]
})
export class AccountModule { }
