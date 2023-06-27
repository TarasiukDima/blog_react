import { DeepPartial } from "@reduxjs/toolkit";
import { IStateSchema } from "app/providers/StoreProvider";
import { getLoginState } from "./getLoginState";

describe("getLoginState", () => {
  test("should return login form state", () => {
    const state: DeepPartial<IStateSchema> = {
      loginForm: { isLoading: false, username: "", password: "" },
    };

    expect(getLoginState(state as IStateSchema)).toEqual(state.loginForm);
  });

  test("should return filled in login form state", () => {
    const state: DeepPartial<IStateSchema> = {
      loginForm: { isLoading: false, username: "admin", password: "123" },
    };

    expect(getLoginState(state as IStateSchema)).toEqual(state.loginForm);
  });

  test("should return with error login form state", () => {
    const state: DeepPartial<IStateSchema> = {
      loginForm: {
        isLoading: false,
        username: "",
        password: "",
        error: "Error",
      },
    };

    expect(getLoginState(state as IStateSchema)).toHaveProperty(
      "isLoading",
      false
    );

    expect(getLoginState(state as IStateSchema)).toHaveProperty(
      "username",
      state.loginForm.username
    );

    expect(getLoginState(state as IStateSchema)).toHaveProperty(
      "error",
      state.loginForm.error
    );

    expect(getLoginState(state as IStateSchema)).toHaveProperty(
      "password",
      state.loginForm.password
    );
  });
});
