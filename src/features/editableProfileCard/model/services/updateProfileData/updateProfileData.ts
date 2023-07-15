import { createAsyncThunk } from "@reduxjs/toolkit";
import { IThunkConfig } from "app/providers/StoreProvider/type";
import { IProfile } from "entities/Profile";
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";
import { validateProfileData } from "../validateProfileData/validateProfileData";
import { ValidateProfileErrors } from "../../types/editableProfileCardSchema";

export const updateProfileData = createAsyncThunk<
  IProfile,
  void,
  IThunkConfig<Array<ValidateProfileErrors>>
>(
  "profile/updateProfileData",
  async (_, { extra, rejectWithValue, getState }) => {
    try {
      const formData = getProfileForm(getState());
      const errors = validateProfileData(formData as IProfile);

      if (errors.length) {
        return rejectWithValue(errors);
      }

      const response = await extra.api.put<IProfile>(
        `/profile/${formData?.id}`,
        formData
      );

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue([ValidateProfileErrors.SERVER_ERROR]);
    }
  }
);
