import { Component, OnInit } from '@angular/core';
import { UserModel } from '../shared/user.model';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../shared/user.service';
import { FormsModule } from '@angular/forms';

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
    this.getUser();
  }

  getUser() {
    if (this.model.name != null) {
      // edit
      this.userService.getUserByName(this.model.name)
        .subscribe(rez => {
          this.model = rez;          
        }
          , error => console.log(error));
    }
  }

  update()  {
    console.log(this.model);
    this.userService.update(this.model).subscribe((rez) => {
      this.getUser();
    })
  }
}
