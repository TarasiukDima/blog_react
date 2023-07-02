import { IStateSchema } from "app/providers/StoreProvider";
import { getProfileLoading } from "./getProfileLoading";
import { Currency } from "../../../../../entities/Currency";
import { Countries } from "../../../../../entities/Countries";

describe("getProfileLoading", () => {
  test("should return false", () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {
        readonly: false,
        isLoading: false,
        error: "",
        data: null,
      },
    };
    expect(getProfileLoading(state as IStateSchema)).toEqual(
      state.profile?.isLoading
    );
  });

  test("should return true", () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {
        readonly: false,
        isLoading: true,
        error: "",
        data: null,
      },
    };
    expect(getProfileLoading(state as IStateSchema)).toEqual(
      state.profile?.isLoading
    );
  });
});
