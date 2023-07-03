import { mockLocalStorage } from "shared/lib/tests/mocks/localstorageMock/localstorageMock";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";
import { userReducer, userActions } from "./userSlice";
import { IUser, IUserSchema } from "../types/user";

const { getItemMock, removeItemMock } = mockLocalStorage();

describe("userSlice.test", () => {
  const state: DeepPartial<IUserSchema> = {
    authData: {
      id: "1",
      username: "admin",
    },
    _inited: true,
  };

  test("setAuthData", () => {
    expect(
      userReducer(
        { _inited: true } as IUserSchema,
        userActions.setAuthData(state.authData as IUser)
      )
    ).toEqual(state);
  });

  test("initAuthData", () => {
    expect(
      userReducer(state as IUserSchema, userActions.initAuthData())
    ).toEqual(state);
    expect(getItemMock).toHaveBeenCalled();
    expect(getItemMock).toHaveBeenCalledWith(USER_LOCALSTORAGE_KEY);
  });

  test("logout user", () => {
    expect(userReducer(state as IUserSchema, userActions.logout())).toEqual({
      authData: undefined,
      _inited: true,
    });
    expect(removeItemMock).toHaveBeenCalled();
    expect(removeItemMock).toHaveBeenCalledWith(USER_LOCALSTORAGE_KEY);
  });
});
