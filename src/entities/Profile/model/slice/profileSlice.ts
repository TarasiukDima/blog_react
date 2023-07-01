import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProfile, IProfileSchema } from "../types/user";
import { fetchProfileData } from "../services/fetchProfileData/fetchProfileData";

const initialState: IProfileSchema = {
  canEdit: false,
  isLoading: false,
  data: null,
  error: "",
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })

      .addCase(
        fetchProfileData.fulfilled,
        (state, action: PayloadAction<IProfile>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )

      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: profileActions, reducer: profileReducer } =
  profileSlice;
