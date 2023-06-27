import { loginReducer, loginActions } from "./loginSlice";
import { ILoginSchema } from "../types/loginSchema";

describe("loginSlice.test", () => {
  const name = "admin";
  const password = "password";

  const state: ILoginSchema = {
    isLoading: false,
    username: "",
    password: "",
  };

  test("setUsername", () => {
    expect(loginReducer(state, loginActions.setUsername(name))).toHaveProperty(
      "username",
      name
    );
  });

  test("setPassword", () => {
    expect(loginReducer(state, loginActions.setPassword(password))).toEqual({
      ...state,
      password,
    });
  });
});
