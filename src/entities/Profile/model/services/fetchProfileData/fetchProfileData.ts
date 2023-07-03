import { createAsyncThunk } from "@reduxjs/toolkit";
import { IThunkConfig } from "app/providers/StoreProvider/type";
import { IProfile } from "../../../model/types/user";

export const fetchProfileData = createAsyncThunk<
  IProfile,
  void,
  IThunkConfig<string>
>("profile/fetchProfileData", async (_, { extra, rejectWithValue }) => {
  try {
    console.log('123');
    const response = await extra.api.get<IProfile>("/profile");

    console.log('response', response);
    console.log('.data', response.data);

    if (!response.data) {
      throw new Error("Error");
    }

    console.log('.data', response.data);

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue("error load profile data");
  }
});
