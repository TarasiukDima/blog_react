import { IStateSchema } from "app/providers/StoreProvider";
import { getProfileError } from "./getProfileError";

describe("getProfileError", () => {
  test("should return current state user data", () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {
        error: "",
      },
    };
    expect(getProfileError(state as IStateSchema)).toEqual(
      state.profile?.error
    );
  });

  test("should return error text", () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {
        error: "Text error",
      },
    };
    expect(getProfileError(state as IStateSchema)).toEqual(
      state.profile?.error
    );
  });
});
