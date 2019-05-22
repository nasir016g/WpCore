import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { UserModel } from '../shared/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
  users: UserModel[];
  newUserForm: FormGroup;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  buildForm(){
    this.newUserForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  getUsers(){
    this.userService.getUsers().subscribe(
      (rez) => {
        this.users = rez;        
        this.buildForm();
       },
      err => { 
        console.log(err.error)
      }
    )
  }

  deleteUser(user: UserModel){
    this.userService.delete(user.name).subscribe(() => {
      this.getUsers();
    })
  }

  createUser(){
    if(!this.newUserForm.valid){
      return;
    }
    const postedUser = new UserModel();
    postedUser.name = this.newUserForm.controls['userName'].value as string;
    postedUser.password = this.newUserForm.controls['password'].value as string;
    this.userService.create(postedUser).subscribe((rez) => {
      this.users.push(postedUser);
      this.buildForm();
    })
  }

}