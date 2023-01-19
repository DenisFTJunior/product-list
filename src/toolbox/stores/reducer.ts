import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "./login/actions";
import productsReducer from "./products/actions";

export const rootReducer = combineReducers({
  login: loginReducer,
  product: productsReducer,
});
