import { Component, OnInit } from '@angular/core';
import { AccessControlService } from '../shared/access-control.service';
import { ClaimRoleModel } from '../shared/claim-role.model';
import { ConcatSource } from 'webpack-sources';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-access-control-list',
  templateUrl: './access-control-list.component.html'
})
export class AccessControlListComponent implements OnInit {
  claims: ClaimRoleModel;
  constructor(private accessControlService: AccessControlService, private alertService: AlertService) { }

  ngOnInit() {
    this.getClaims();
  }

  getClaims() {
    this.accessControlService.getClaims().subscribe(
      (rez) => {
        this.claims = rez;       
      }
    )    
  }

  update() {
    this.accessControlService.update(this.claims).subscribe((rez) => {
      console.log(rez);
      this.alertService.success('Updated successfully.')

    })
  }

  toLowerFirstChar(value: string) : string {
    return value.replace(/^\w/, c => c.toLowerCase())
  }  
}
