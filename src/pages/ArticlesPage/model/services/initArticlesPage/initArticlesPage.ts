import {
  ActionCreator,
  AnyAction,
  ThunkDispatch,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import {
  IStateSchema,
  IThunkConfig,
  IThunkExtraArg,
} from "@/app/providers/StoreProvider/type";
import { getArticlesInitedState } from "../../selectors/articles";
import { articlesPageActions } from "../../slices/articlesPageSlice";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";

const checkUrlStringExist = (
  strFromUrl: string | null,
  dispatch: ThunkDispatch<IStateSchema, IThunkExtraArg, AnyAction>,
  action: ActionCreator<AnyAction>
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

    checkUrlStringExist(
      searchParams.get("type"),
      dispatch,
      articlesPageActions.setType
    );

    dispatch(articlesPageActions.initState());
    dispatch(fetchArticlesList({}));
  }
});
