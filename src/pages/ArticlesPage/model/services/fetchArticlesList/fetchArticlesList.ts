import { createAsyncThunk } from "@reduxjs/toolkit";
import { IThunkConfig } from "app/providers/StoreProvider/type";
import { IArticle } from "entities/Article";
import { getArticlesPageLimit } from "../../selectors/articles";

interface IFetchArticlesProps {
  page: number;
}

export const fetchArticlesList = createAsyncThunk<
  Array<IArticle>,
  IFetchArticlesProps,
  IThunkConfig<string>
>("articlesPage/fetchArticlesList", async (args, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;
  const { page = 1 } = args;
  const limit = getArticlesPageLimit(getState());

  try {
    const response = await extra.api.get<Array<IArticle>>("/articles", {
      params: {
        _limit: limit,
        _page: page,
        _expand: "user",
      },
    });

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    return rejectWithValue("error");
  }
});
