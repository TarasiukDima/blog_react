const firstCharUpperCase = require("../helpers/firstCharUpperCase");

module.exports = (sliceName) => {
  const schemaName = `I${firstCharUpperCase(sliceName)}Schema`;

  return `import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ${schemaName} } from "../types/${sliceName}Schema";

const initialState: ${schemaName} = {};

export const ${sliceName}Slice = createSlice({
  name: "${sliceName}",
  initialState,
  reducers: {
    template: (state, action: PayloadAction<string>) => {},
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(NAME_EXTRA_REDUCER, (state) => {
  //       state.error = undefined;
  //       state.isLoading = true;
  //     })
  //     .addCase(NAME_EXTRA_REDUCER, (state) => {
  //       state.isLoading = false;
  //   })
  //     .addCase(NAME_EXTRA_REDUCER, (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //   });
  // },
});

export const { actions: ${sliceName}Actions, reducer: ${sliceName}Reducer } = ${sliceName}Slice;
`;
};
