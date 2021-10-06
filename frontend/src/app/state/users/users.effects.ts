import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "../../user/services/user.service";
import { registerUser, registerUserSuccess } from "./users.action";
import { map, switchMap } from "rxjs/operators";
import { User } from "../../models/user.model";

@Injectable()
export class UsersEffects {
 constructor(private action$: Actions, private userService: UserService) {}

 registerUser$ = createEffect(() => {
   return this.action$.pipe(
     ofType(registerUser),
     switchMap((user: User) => this.userService.registerUser(user).pipe(
       map((user: User) => registerUserSuccess({ user }))
     ))
   );
 })
}
