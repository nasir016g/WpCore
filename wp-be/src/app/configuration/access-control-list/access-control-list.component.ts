import { Component, OnInit } from '@angular/core';
import { AccessControlService } from '../shared/access-control.service';
import { ClaimRoleModel } from '../shared/claim-role.model';

@Component({
  selector: 'app-access-control-list',
  templateUrl: './access-control-list.component.html'
})
export class AccessControlListComponent implements OnInit {
  claims: ClaimRoleModel;
  constructor(private accessControlService: AccessControlService) { }

  ngOnInit() {
    this.getClaims();
  }

  getClaims() {
    this.accessControlService.getClaims().subscribe(
      (rez) => {
        this.claims = rez;
        console.log(this.claims);
      }
    )
  }

}
