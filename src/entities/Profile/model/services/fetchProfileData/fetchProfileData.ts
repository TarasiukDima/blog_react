import { createAsyncThunk } from "@reduxjs/toolkit";
import { IThunkConfig } from "app/providers/StoreProvider/type";
import { IProfile } from "../../../model/types/user";

export const fetchProfileData = createAsyncThunk<
  IProfile,
  string,
  IThunkConfig<string>
>("profile/fetchProfileData", async (profileId, { extra, rejectWithValue }) => {
  try {
    const response = await extra.api.get<IProfile>(`/profile/${profileId}`);

    if (!response.data) {
      throw new Error("Error");
    }

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue("error load profile data");
  }
});
