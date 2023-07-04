import { IStateSchema } from "app/providers/StoreProvider";
import { getArticleLoading } from "./getArticleLoading";

describe("getArticleLoading", () => {
  test("should return false", () => {
    const state: DeepPartial<IStateSchema> = {
      articleDetails: {
        isLoading: false,
      },
    };
    expect(getArticleLoading(state as IStateSchema)).toEqual(
      state.articleDetails?.isLoading
    );
  });

  test("should return true", () => {
    const state: DeepPartial<IStateSchema> = {
      articleDetails: {
        isLoading: true,
      },
    };
    expect(getArticleLoading(state as IStateSchema)).toEqual(
      state.articleDetails?.isLoading
    );
  });
});
