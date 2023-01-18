import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "./login/actions";

export const rootReducer = combineReducers({
  login: loginReducer,
});
