import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProfile } from "@/entities/Profile";
import { fetchProfileData } from "../services/fetchProfileData/fetchProfileData";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";
import { IProfileSchema } from "../types/editableProfileCardSchema";

const initialState: IProfileSchema = {
  readonly: true,
  isLoading: false,
  data: null,
  form: null,
  error: "",
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setReadOnly: (state, action) => {
      state.readonly = action.payload;
    },
    cancelEdit: (state) => {
      state.readonly = true;
      state.form = state.data;
      state.validateErrors = null;
    },
    updateProfile: (state, action) => {
      state.form = {
        ...state.form,
        ...action.payload,
      };
    },
  },
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
          state.form = action.payload;
        }
      )

      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateProfileData.pending, (state) => {
        state.validateErrors = null;
        state.isLoading = true;
      })

      .addCase(
        updateProfileData.fulfilled,
        (state, action: PayloadAction<IProfile>) => {
          state.isLoading = false;
          state.data = action.payload;
          state.form = action.payload;
          state.readonly = true;
          state.validateErrors = null;
        }
      )

      .addCase(updateProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.validateErrors = action.payload;
      });
  },
});

export const { actions: profileActions, reducer: profileReducer } =
  profileSlice;
