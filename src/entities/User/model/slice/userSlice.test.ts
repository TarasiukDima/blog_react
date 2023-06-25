import { userReducer, userActions } from "./userSlice";
import { IUserSchema } from "../types/user";

describe("userSlice.test", () => {
  const state: IUserSchema = {
    authData: {
      id: "1",
      username: "admin",
    },
  };

  test("decrement", () => {
    expect(userReducer(state, userActions.setAuthData())).toEqual({
      value: 9,
    });
  });
  test("increment", () => {
    expect(userReducer(state, userActions.initAuthData())).toEqual({
      value: 11,
    });
  });

  test("logout user", () => {
    expect(userReducer(undefined, userActions.logout())).toEqual({
      value: 1,
    });
  });
});
