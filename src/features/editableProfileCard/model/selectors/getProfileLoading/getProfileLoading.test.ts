import { IStateSchema } from "app/providers/StoreProvider";
import { getProfileLoading } from "./getProfileLoading";

describe("getProfileLoading", () => {
  test("should return false", () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {
        isLoading: false,
      },
    };
    expect(getProfileLoading(state as IStateSchema)).toEqual(
      state.profile?.isLoading
    );
  });

  test("should return true", () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {
        isLoading: true,
      },
    };
    expect(getProfileLoading(state as IStateSchema)).toEqual(
      state.profile?.isLoading
    );
  });
});
