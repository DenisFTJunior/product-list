export interface LoginState {
  logged: boolean;
  loggedUser?: string;
  form: {
    username: string;
    password: string;
    hasError: boolean;
    errorMessage: string;
  };
}

export const initialState: LoginState = {
  logged: false,
  loggedUser: undefined,
  form: {
    username: "",
    password: "",
    hasError: false,
    errorMessage: "",
  },
};
