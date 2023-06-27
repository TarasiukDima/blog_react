import { mockLocalStorage } from "shared/lib/tests/mocks/localstorageMock/localstorageMock";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";
import { userReducer, userActions } from "./userSlice";
import { IUserSchema } from "../types/user";

const { getItemMock, removeItemMock } = mockLocalStorage();

describe("userSlice.test", () => {
  const state: IUserSchema = {
    authData: {
      id: "1",
      username: "admin",
    },
  };

  test("setAuthData", () => {
    expect(userReducer({}, userActions.setAuthData(state.authData))).toEqual(
      state
    );
  });

  test("initAuthData", () => {
    expect(userReducer(state, userActions.initAuthData())).toEqual(state);
    expect(getItemMock).toHaveBeenCalled();
    expect(getItemMock).toHaveBeenCalledWith(USER_LOCALSTORAGE_KEY);
  });

  test("logout user", () => {
    expect(userReducer(state, userActions.logout())).toEqual({
      authData: undefined,
    });
    expect(removeItemMock).toHaveBeenCalled();
    expect(removeItemMock).toHaveBeenCalledWith(USER_LOCALSTORAGE_KEY);
  });
});