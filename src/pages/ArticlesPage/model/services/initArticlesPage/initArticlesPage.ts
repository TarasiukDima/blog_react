import { createAsyncThunk } from "@reduxjs/toolkit";
import { IThunkConfig } from "app/providers/StoreProvider/type";
import { getArticlesInitedState } from "../../selectors/articles";
import { articlesPageActions } from "../../slices/articlesPageSlice";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";

const checkUrlStringExist = (
  strFromUrl: string | null,
  dispatch: any,
  action: any
) => {
  if (strFromUrl) {
    dispatch(action(strFromUrl));
  }
};

export const initArticlesPage = createAsyncThunk<
  void,
  URLSearchParams,
  IThunkConfig<string>
>("articlesPage/initArticlesPage", async (searchParams, thunkApi) => {
  const { dispatch, getState } = thunkApi;
  const inited = getArticlesInitedState(getState());

  if (!inited) {
    // const orderFromUrl = searchParams.get("order");
    // const sortFromUrl = searchParams.get("sort");
    // const searchFromUrl = searchParams.get("search");

    checkUrlStringExist(
      searchParams.get("order"),
      dispatch,
      articlesPageActions.setOrder
    );

    checkUrlStringExist(
      searchParams.get("sort"),
      dispatch,
      articlesPageActions.setSort
    );

    checkUrlStringExist(
      searchParams.get("search"),
      dispatch,
      articlesPageActions.setSearch
    );

    dispatch(articlesPageActions.initState());
    dispatch(fetchArticlesList({}));
  }
});
