import { TestAsyncThunk } from "shared/lib/tests/mocks/TestAsyncThunk/TestAsyncThunk";
import { mockLocalStorage } from "shared/lib/tests/mocks/localstorageMock/localstorageMock";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";
import { userActions } from "../../../../../entities/User";
import { loginByUsername } from "./loginByUsername";

describe("loginByUsername.test", () => {
  const userData = { username: "123", password: "123" };
  const mocStorage = mockLocalStorage();

  test("success login", async () => {
    const userValue = { username: "123", id: "1" };

    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));
    const result = await thunk.callThunk(userData);

    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData(userValue)
    );
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(userValue);
    expect(mocStorage.setItemMock).toHaveBeenCalledTimes(1);
    expect(mocStorage.setItemMock).toHaveBeenLastCalledWith(
      USER_LOCALSTORAGE_KEY,
      JSON.stringify(userValue)
    );
  });

  test("error login", async () => {
    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk(userData);

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toBe("error with login or password");
    expect(mocStorage.setItemMock).toHaveBeenCalledTimes(0);
  });
});
