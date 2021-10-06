import { createAction, props } from "@ngrx/store";
import { User } from "../../models/user.model";

export const registerUser = createAction(
  '[User] Register User',
  props<User>()
);

export const registerUserSuccess = createAction(
  '[User] Register User Success',
  props<{ user: User }>()
);

export const loginUser = createAction(
  '[User] Login User',
  props<{ username: string, password: string }>()
);

export const loginUserSuccess = createAction(
  '[User] Login User Success',
  props<{ user: User }>()
);
