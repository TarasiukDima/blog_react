import { IStateSchema } from "app/providers/StoreProvider";
import { getLoginError } from "./getLoginError";

describe("getLoginError.test", () => {
  test("should return error", () => {
    const state: DeepPartial<IStateSchema> = {
      loginForm: {
        error: "error",
      },
    };
    expect(getLoginError(state as IStateSchema)).toEqual("error");
  });

  test("should work with empty state", () => {
    expect(getLoginError({} as IStateSchema)).toEqual(undefined);
  });
});