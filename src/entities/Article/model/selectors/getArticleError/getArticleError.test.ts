import { IStateSchema } from "app/providers/StoreProvider";
import { getArticleError } from "./getArticleError";

describe("getArticleError", () => {
  test("should return current state article data", () => {
    const state: DeepPartial<IStateSchema> = {
      article: {
        error: "",
      },
    };
    expect(getArticleError(state as IStateSchema)).toEqual(
      state.article?.error
    );
  });

  test("should return error text", () => {
    const state: DeepPartial<IStateSchema> = {
      article: {
        error: "Text error",
      },
    };
    expect(getArticleError(state as IStateSchema)).toEqual(
      state.article?.error
    );
  });
});
