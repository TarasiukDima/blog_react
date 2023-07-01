import { IStateSchema } from "app/providers/StoreProvider";
import { Countries, Currency } from "shared/const/config";
import { getProfileLoading } from "./getProfileLoading";

describe("getProfileLoading", () => {
  test("should return false", () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {
        canEdit: false,
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
        canEdit: false,
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
