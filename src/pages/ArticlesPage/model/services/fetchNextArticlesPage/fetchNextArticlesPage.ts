import { createAsyncThunk } from "@reduxjs/toolkit";
import { IThunkConfig } from "@/app/providers/StoreProvider/type";
import {
  getArticlesCurrentPage,
  getArticlesPageHasMore,
  getArticlesPageIsLoading,
} from "../../selectors/articles";
import { articlesPageActions } from "../../slices/articlesPageSlice";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";

export const fetchNextArticlesPage = createAsyncThunk<
  void,
  void,
  IThunkConfig<string>
>("articlesPage/fetchNextArticlesPage", async (_, thunkApi) => {
  const { getState, dispatch } = thunkApi;
  const hasMore = getArticlesPageHasMore(getState());
  const isLoadingArticles = getArticlesPageIsLoading(getState());
  const page = getArticlesCurrentPage(getState());

  if (hasMore && !isLoadingArticles) {
    dispatch(articlesPageActions.setPage(page + 1));
    dispatch(fetchArticlesList({}));
  }
});
