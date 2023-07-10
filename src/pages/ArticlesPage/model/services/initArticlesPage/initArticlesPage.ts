import { createAsyncThunk } from "@reduxjs/toolkit";
import { IThunkConfig } from "app/providers/StoreProvider/type";
import { getArticlesInitedState } from "../../selectors/articles";
import { articlesPageActions } from "../../slices/articlesPageSlice";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";

export const initArticlesPage = createAsyncThunk<
  void,
  void,
  IThunkConfig<string>
>("articlesPage/initArticlesPage", async (_, thunkApi) => {
  const { dispatch, getState } = thunkApi;
  const inited = getArticlesInitedState(getState());

  if (!inited) {
    dispatch(articlesPageActions.initState());
    dispatch(fetchArticlesList({ page: 1 }));
  }
});
