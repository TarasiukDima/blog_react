import { Currency } from "../../../../entities/Currency";
import { Countries } from "../../../../entities/Countries";
import {
  profileActions,
  profileReducer,
  IProfileSchema,
  updateProfileData,
  ValidateProfileErrors,
} from "../../../../entities/Profile";

const data = {
  first: "User",
  lastname: "Userov",
  age: 91,
  currency: Currency.RUB,
  country: Countries.Belarus,
  city: "Brest",
  username: "admin",
  avatar: "1024.png",
};

describe("profileSlice.test", () => {
  test("test set readonly", () => {
    const state: DeepPartial<IProfileSchema> = { readonly: false };
    expect(
      profileReducer({} as IProfileSchema, profileActions.setReadOnly(true))
    ).toEqual({ readonly: true });
  });

  test("test cancel edit", () => {
    const state: DeepPartial<IProfileSchema> = { data, form: { username: "" } };

    expect(
      profileReducer(state as IProfileSchema, profileActions.cancelEdit())
    ).toEqual({
      readonly: true,
      validateErrors: null,
      data,
      form: data,
    });
  });

  test("test update profile", () => {
    const state: DeepPartial<IProfileSchema> = { form: { username: "123" } };

    expect(
      profileReducer(
        state as IProfileSchema,
        profileActions.updateProfile({
          username: "123456",
        })
      )
    ).toEqual({
      form: { username: "123456" },
    });
  });

  test("test update profile service pending", () => {
    const state: DeepPartial<IProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileErrors.SERVER_ERROR],
    };

    expect(
      profileReducer(state as IProfileSchema, updateProfileData.pending)
    ).toEqual({
      isLoading: true,
      validateErrors: null,
    });
  });

  test("test update profile service fullfiled", () => {
    const state: DeepPartial<IProfileSchema> = {
      isLoading: true,
    };

    expect(
      profileReducer(
        state as IProfileSchema,
        updateProfileData.fulfilled(data, "")
      )
    ).toEqual({
      isLoading: false,
      readonly: true,
      validateErrors: null,
      form: data,
      data,
    });
  });
});
