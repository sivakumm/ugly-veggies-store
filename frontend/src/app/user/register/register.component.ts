import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { AppState } from "../../state/app.state";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { registerUser } from "../../state/users/users.action";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  userForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/)
    ]),
    currency: new FormControl('CHF', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3)
    ])
  });

  constructor(private store: Store<AppState>) { }

  onSubmit(): void {
    this.store.dispatch(registerUser(this.userForm.value));
  }
}
