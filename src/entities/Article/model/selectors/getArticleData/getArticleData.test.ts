import { IStateSchema } from "app/providers/StoreProvider";
import { getArticleData } from "./getArticleData";

describe("getCounter", () => {
  test("should return current state article data", () => {
    const state: DeepPartial<IStateSchema> = {
      article: {
        data: {
          id: "123",
        },
      },
    };
    expect(getArticleData(state as IStateSchema)).toEqual(state.article?.data);
  });

  test("should return null", () => {
    const state: DeepPartial<IStateSchema> = {
      article: {
        data: null,
      },
    };
    expect(getArticleData(state as IStateSchema)).toEqual(null);
  });
});
