import { IStateSchema } from "@/app/providers/StoreProvider";
import { getProfileReadOnly } from "./getProfileReadOnly";

describe("getProfileReadOnly", () => {
  test("should return false", () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {
        readonly: false,
      },
    };
    expect(getProfileReadOnly(state as IStateSchema)).toEqual(
      state.profile?.readonly
    );
  });

  test("should return true", () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {
        readonly: true,
      },
    };
    expect(getProfileReadOnly(state as IStateSchema)).toEqual(
      state.profile?.readonly
    );
  });
});
