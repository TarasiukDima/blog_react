import { TestAsyncThunk } from "shared/lib/tests/mocks/TestAsyncThunk/TestAsyncThunk";
import { IStateSchema } from "app/providers/StoreProvider";
import { fetchNextArticlesPage } from "./fetchNextArticlesPage";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";

jest.mock("../fetchArticlesList/fetchArticlesList");

describe("fetchNextArticlesPage.test", () => {
  const state: DeepPartial<IStateSchema> = {
    articlesPage: {
      page: 2,
      ids: [],
      entities: {},
      limit: 5,
      isLoading: false,
      hasMore: true,
    },
  };

  test("success", async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, state);
    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 });
  });

  test("fetchArticleList not called", async () => {
    const newState: DeepPartial<IStateSchema> = {
      ...state,
      articlesPage: {
        ...state.articlesPage,
        hasMore: false,
      },
    };
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, newState);
    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
