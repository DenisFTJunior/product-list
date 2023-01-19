import { createSlice } from "@reduxjs/toolkit";
import { loginFormActions } from "./form";
import { initialState } from "./state";

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state) => {
      const { password, username } = state.form;
      if (state.form.hasError) state.logged = false;
      else if (password === "admin" && username === "admin") {
        state.logged = true;
        state.loggedUser = username;
        state.form.username = "";
        state.form.password = "";
      } else if (!state.form.hasError) {
        state.form.hasError = true;
        state.form.errorMessage = "Invalid username or password";
      }
    },

    logout: (state) => {
      state.form = initialState.form;
      state.logged = false;
    },
    ...loginFormActions,
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, fillPassword, fillUsername, validateForm } =
  loginSlice.actions;

export default loginSlice.reducer;
