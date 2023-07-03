import { createAsyncThunk } from "@reduxjs/toolkit";
import { IThunkConfig } from "app/providers/StoreProvider/type";
import { IArticle } from "../../types/article";

export const fetchArticleById = createAsyncThunk<
  IArticle,
  string,
  IThunkConfig<string>
>("article/fetchArticleById", async (articleId, { extra, rejectWithValue }) => {
  try {
    const response = await extra.api.get<IArticle>(`/articles/${articleId}`);

    if (!response.data) {
      throw new Error("Error");
    }

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue("error load article data");
  }
});
