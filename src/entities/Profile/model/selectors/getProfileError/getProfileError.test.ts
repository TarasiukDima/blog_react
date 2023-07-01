import { IStateSchema } from "app/providers/StoreProvider";
import { Countries, Currency } from "shared/const/config";
import { getProfileError } from "./getProfileError";

describe("getCounter", () => {
  test("should return current state user data", () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {
        canEdit: false,
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
        canEdit: false,
        isLoading: false,
        error: "Text error",
        data: null,
      },
    };
    expect(getProfileError(state as IStateSchema)).toEqual(state.profile?.error);
  });
});
