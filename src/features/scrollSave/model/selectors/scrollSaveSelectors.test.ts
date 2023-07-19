import { IStateSchema } from "@/app/providers/StoreProvider";
import { getScrollValues, getScrollByPath } from "./scrollSaveSelectors";

describe("ScrollSelectors.test", () => {
  const state: DeepPartial<IStateSchema> = {
    scroll: {
      main: 100,
    },
  };
  test("getScrollValues should return scroll state", () => {
    expect(getScrollValues(state as IStateSchema)).toEqual(state.scroll);
  });

  test("getScrollValues should work with empty state", () => {
    expect(getScrollValues({} as IStateSchema)).toEqual({});
  });

  test("getScrollByPath should return scroll value on page", () => {
    expect(getScrollByPath(state as IStateSchema, "main")).toEqual(
      state.scroll?.main
    );
  });

  test("getScrollByPath should work with empty state", () => {
    expect(getScrollByPath({} as IStateSchema, "main")).toEqual(0);
  });
});
