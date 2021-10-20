import { User } from "../../models/user.model";
import { createReducer, on } from "@ngrx/store";
import { loginUserSuccess, logoutUser, registerUserSuccess } from "./users.action";

const initialState: Readonly<User> = {
  username: '',
  email: '',
  currency: 'CHF'
};

export const userReducer = createReducer(
  initialState,
  on(registerUserSuccess, (state, { user }): User => user),
  on(loginUserSuccess, (state, { user }): User => user),
  on(logoutUser, (state, _): User => initialState),
);
