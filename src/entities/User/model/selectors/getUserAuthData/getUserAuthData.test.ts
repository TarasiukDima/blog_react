import { IStateSchema } from "app/providers/StoreProvider";
import { getUserAuthData } from "./getUserAuthData";

describe("getCounter", () => {
  test("should return current state user data", () => {
    const state: DeepPartial<IStateSchema> = {
      user: {
        authData: {
          id: "1",
          username: "admin",
        },
      },
    };
    expect(getUserAuthData(state as IStateSchema)).toEqual(state!.user!.authData);
  });

  test("should return undefined", () => {
    const state: DeepPartial<IStateSchema> = {
      user: {
        authData: undefined,
      },
    };
    expect(getUserAuthData(state as IStateSchema)).toEqual(undefined);
  });
});
