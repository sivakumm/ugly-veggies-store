import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { User } from "../../models/user.model";
import { logoutUser } from "../../state/users/users.action";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {

  constructor(private store: Store<{ user: User }>) { }

  onSubmit(): void {
    this.store.dispatch(logoutUser());
  }
}
