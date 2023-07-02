import { IStateSchema } from "app/providers/StoreProvider";
import { getProfileForm } from "./getProfileForm";

describe("getCounter", () => {
  test("should return current state user data", () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {
        form: {
          first: "User",
          lastname: "Userov",
        },
      },
    };
    expect(getProfileForm(state as IStateSchema)).toEqual(state.profile?.form);
  });

  test("should return null", () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {
        form: null,
      },
    };
    expect(getProfileForm(state as IStateSchema)).toEqual(null);
  });
});
