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
  on(registerUserSuccess, (state, { user }) => user),
  on(loginUserSuccess, (state, { user }) => user),
  on(logoutUser, () => initialState)
);
