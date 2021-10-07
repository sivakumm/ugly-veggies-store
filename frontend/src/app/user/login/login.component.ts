import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { User } from "../../models/user.model";
import {loginUser} from "../../state/users/users.action";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required
    ])
  });

  constructor(private store: Store<{ user: User }>) { }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.store.dispatch(loginUser(this.loginForm.value));
    }
  }
}
