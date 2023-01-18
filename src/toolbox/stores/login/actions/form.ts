import { PayloadAction } from "@reduxjs/toolkit";
import { LoginState } from "./state";
import { formatFormValues, FormError } from "../../../form/formatFormValues";
import { required } from "../../../form/rules/required";

export const loginFormActions = {
  //form actions
  fillUsername: (state: LoginState, action: PayloadAction<string>) => {
    state.form.username = action.payload;
  },

  fillPassword: (state: LoginState, action: PayloadAction<string>) => {
    state.form.password = action.payload;
  },

  validateForm: (state: LoginState) => {
    state.form.errorMessage = "";
    state.form.hasError = false;
    console.log("state", state.form.username, state.form.password);
    const formattedValues = formatFormValues([
      {
        name: "password",
        value: state.form.password,
        rules: [
          {
            func: (v: any) => required(v),
            message: "Please, fill the password field",
          },
        ],
      },
      {
        name: "username",
        value: state.form.username,
        rules: [
          {
            func: (v: any) => required(v),
            message: "Please, fill the username field",
          },
        ],
      },
    ]);
    const hasError = Object.values(formattedValues).some(
      (value) => typeof value === "object"
    );

    if (hasError)
      state.form.errorMessage = (
        Object.entries(formattedValues).filter(
          ([_, v]) => typeof v === "object"
        )[0][1] as FormError
      ).error;

    state.form.hasError = hasError;
  },
};
