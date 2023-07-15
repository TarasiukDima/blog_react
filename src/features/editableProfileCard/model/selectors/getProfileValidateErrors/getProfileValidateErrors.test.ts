import { IStateSchema } from "app/providers/StoreProvider";
import { getProfileValidateErrors } from "./getProfileValidateErrors";
import { ValidateProfileErrors } from "../../types/editableProfileCardSchema";

describe("getProfileValidateErrors", () => {
  test("should return false", () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {
        validateErrors: [ValidateProfileErrors.INCORRECT_AGE],
      },
    };

    expect(getProfileValidateErrors(state as IStateSchema)).toEqual(
      state.profile?.validateErrors
    );
  });

  test("should return null", () => {
    expect(getProfileValidateErrors({} as IStateSchema)).toEqual([]);
  });
});
