import { createAsyncThunk } from "@reduxjs/toolkit";
import { IThunkConfig } from "app/providers/StoreProvider/type";
import { IProfile } from "../../types/user";
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";

export const updateProfileData = createAsyncThunk<
  IProfile,
  void,
  IThunkConfig<string>
>(
  "profile/updateProfileData",
  async (_, { extra, rejectWithValue, getState }) => {
    try {
      const formData = getProfileForm(getState());
      const response = await extra.api.put<IProfile>("/profile", formData);

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue("error load profile data");
    }
  }
);
