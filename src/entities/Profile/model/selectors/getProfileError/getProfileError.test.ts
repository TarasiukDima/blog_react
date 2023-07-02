import { IStateSchema } from "app/providers/StoreProvider";
import { Currency } from "../../../../../entities/Currency";
import { Countries } from "../../../../../entities/Countries";
import { getProfileError } from "./getProfileError";

describe("getCounter", () => {
  test("should return current state user data", () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {
        readonly: false,
        isLoading: false,
        error: "",
        data: null,
      },
    };
    expect(getProfileError(state as IStateSchema)).toEqual(
      state.profile?.error
    );
  });

  test("should return error text", () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {
        readonly: false,
        isLoading: false,
        error: "Text error",
        data: null,
      },
    };
    expect(getProfileError(state as IStateSchema)).toEqual(state.profile?.error);
  });
});
