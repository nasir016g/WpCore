import { Component, OnInit } from '@angular/core';
import { UserModel } from '../shared/user.model';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: []
})
export class UserDetailsComponent implements OnInit {
  model: UserModel = new UserModel();

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService) {
    if (this.activatedRoute.snapshot.params['userName']) {
      this.model.name = this.activatedRoute.snapshot.params['userName'];
    }
  }

  ngOnInit() {
    if (this.model.name != null) {
      // edit
      this.userService.getUserByName(this.model.name)
        .subscribe(rez => {
          this.model = rez;
          //this.buildForm(this.formBuilder);
        }
          , error => console.log(error));
    }
  }
}
