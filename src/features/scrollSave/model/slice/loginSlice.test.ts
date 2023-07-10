import { scrollReducer, scrollActions } from "./scrollSaveSlice";
import { IScrollSchema } from "../types/scrollSaveSchema";

describe("scrollSaveSlice.test", () => {
  const state: IScrollSchema = {};
  const scrollValue = 150;

  test("setScrollPosition", () => {
    expect(
      scrollReducer(
        state,
        scrollActions.setScrollPosition({ path: "main", position: scrollValue })
      )
    ).toEqual({ main: scrollValue });

    expect(
      scrollReducer(
        state,
        scrollActions.setScrollPosition({ path: "main", position: 0 })
      )
    ).toEqual({ main: 0 });
  });
});
