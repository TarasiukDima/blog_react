import { TestAsyncThunk } from "@/shared/lib/tests/mocks/TestAsyncThunk/TestAsyncThunk";
import { initArticlesPage } from "./initArticlesPage";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";

jest.mock("../fetchArticlesList/fetchArticlesList");

jest.spyOn(URLSearchParams.prototype, "get").mockImplementation((key) => key);

describe("initArticlesPage.test", () => {
  const paramsUrl = jest.mocked("URLSearchParams");

  test("initArticlesPage called", async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        _inited: false,
      },
    });
    await thunk.callThunk({} as URLSearchParams);
    // expect(thunk.dispatch).toBeCalledTimes(4);
    // expect(fetchArticlesList).toHaveBeenCalled();
    expect(thunk.dispatch).toBeCalledTimes(2);
  });

  test("initArticlesPage not called", async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        _inited: true,
      },
    });
    await thunk.callThunk({} as URLSearchParams);

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
