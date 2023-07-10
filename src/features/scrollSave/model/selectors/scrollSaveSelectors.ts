import { createSelector } from "@reduxjs/toolkit";
import { IStateSchema } from "app/providers/StoreProvider";

export const getScrollValues = (state: IStateSchema) => state?.scroll || {};

export const getScrollByPath = createSelector(
  getScrollValues,
  (state: IStateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0
);
