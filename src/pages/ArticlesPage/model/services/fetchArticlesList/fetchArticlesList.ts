import { createAsyncThunk } from "@reduxjs/toolkit";
import { IThunkConfig } from "app/providers/StoreProvider/type";
import { ArticleType, IArticle } from "entities/Article";
import { addQueryParams } from "shared/lib/url/addQueryParams/addQueryParams";
import {
  getArticlesCurrentPage,
  getArticlesOrder,
  getArticlesPageLimit,
  getArticlesSearch,
  getArticlesSort,
  getArticlesType,
} from "../../selectors/articles";

interface IFetchArticlesListProps {
  replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
  Array<IArticle>,
  IFetchArticlesListProps,
  IThunkConfig<string>
>("articlesPage/fetchArticlesList", async (args, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;
  const limit = getArticlesPageLimit(getState());
  const sort = getArticlesSort(getState());
  const order = getArticlesOrder(getState());
  const search = getArticlesSearch(getState());
  const page = getArticlesCurrentPage(getState());
  const type = getArticlesType(getState());

  try {
    addQueryParams({
      sort,
      order,
      search,
      type,
    });
    const response = await extra.api.get<Array<IArticle>>("/articles", {
      params: {
        _expand: "user",
        _limit: limit,
        _page: page,
        _sort: sort,
        _order: order,
        q: search,
        type: type === ArticleType.ALL ? undefined : type,
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
