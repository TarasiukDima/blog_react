import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IScrollSchema } from "../types/scrollSaveSchema";

const initialState: IScrollSchema = {
};

export const scrollSaveSlice = createSlice({
  name: "scrollSave",
  initialState,
  reducers: {
    setScrollPosition: (
      state,
      { payload }: PayloadAction<{ path: string; position: number }>
    ) => {
      state[payload.path] = payload.position;
    },
  },
});

export const { actions: scrollActions, reducer: scrollReducer } = scrollSaveSlice;
