import { createAsyncThunk } from "@reduxjs/toolkit";
import { IThunkConfig } from "app/providers/StoreProvider/type";
import { IArticle } from "../../../../../entities/Article";

export const fetchArticleRecommendations = createAsyncThunk<
  Array<IArticle>,
  void,
  IThunkConfig<string>
>("articleDetails/fetchArticleRecommendations", async (args, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;

  try {
    const response = await extra.api.get<Array<IArticle>>("/articles", {
      params: {
        _limit: 4,
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
