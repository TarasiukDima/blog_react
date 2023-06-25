import { StoryFn } from "@storybook/react";
import { DeepPartial } from "@reduxjs/toolkit";
import { IStateSchema, StoreProvider } from "app/providers/StoreProvider";

export const StoreDecorator =
  (state: DeepPartial<IStateSchema>) => (StoryComponent: StoryFn) => (
    <StoreProvider initialState={state}>
      <StoryComponent />
    </StoreProvider>
  );
