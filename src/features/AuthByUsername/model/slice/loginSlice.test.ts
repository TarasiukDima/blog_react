import { loginReducer, loginActions } from "./loginSlice";
import { ILoginSchema } from "../types/loginSchema";

describe("loginSlice.test", () => {
  const state: ILoginSchema = {
    isLoading: false,
    username: "",
    password: "",
  };

  test("setUsername", () => {
    const name = "admin";
    expect(loginReducer(state, loginActions.setUsername(name))).toHaveProperty(
      "username",
      name
    );
  });

  test("setPassword", () => {
    const password = "password";
    expect(loginReducer(state, loginActions.setPassword(password))).toEqual({
      ...state,
      password,
    });
  });
});
