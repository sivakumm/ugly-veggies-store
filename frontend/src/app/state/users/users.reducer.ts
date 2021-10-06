import { User } from "../../models/user.model";
import { createReducer, on } from "@ngrx/store";
import { registerUserSuccess } from "./users.action";

const initialState: Readonly<User> = {
  username: '',
  email: '',
  currency: 'CHF'
};

export const userReducer = createReducer(
  initialState,
  on(registerUserSuccess, (state, { user }): User => user)
);
