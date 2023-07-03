import { IStateSchema } from "app/providers/StoreProvider";
import { getArticleLoading } from "./getArticleLoading";

describe("getArticleLoading", () => {
  test("should return false", () => {
    const state: DeepPartial<IStateSchema> = {
      article: {
        isLoading: false,
      },
    };
    expect(getArticleLoading(state as IStateSchema)).toEqual(
      state.article?.isLoading
    );
  });

  test("should return true", () => {
    const state: DeepPartial<IStateSchema> = {
      article: {
        isLoading: true,
      },
    };
    expect(getArticleLoading(state as IStateSchema)).toEqual(
      state.article?.isLoading
    );
  });
});
