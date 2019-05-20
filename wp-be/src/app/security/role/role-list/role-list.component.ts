import { Component, OnInit } from '@angular/core';
import { RoleService } from '../shared/role.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html'
})
export class RoleListComponent implements OnInit {
  roles: string[];
  newRoleForm: FormGroup;

  constructor(private roleService: RoleService) { }

  ngOnInit() {
    this.getRoles();
  }

  buildForm(){
    this.newRoleForm = new FormGroup({
      roleName: new FormControl('', [Validators.required])
    });
  }

  getRoles(){
    this.roleService.getRoles().subscribe(
      (rez) => {
        this.roles = rez;        
        this.buildForm();
       },
      err => { 
        console.log(err.error)
      }
    )
  }

  deleteRole(role: string){
    this.roleService.delete(role).subscribe(() => {
      this.getRoles();
    })
  }

  createRole(){
    if(!this.newRoleForm.valid){
      return;
    }
    const postedRole = this.newRoleForm.controls['roleName'].value as string;
    this.roleService.create(postedRole).subscribe((rez) => {
      this.roles.push(postedRole);
      this.buildForm();
    })
  }

}
