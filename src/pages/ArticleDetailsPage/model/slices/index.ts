import { combineReducers } from "@reduxjs/toolkit";
import { IArticleDetailsPageSchema } from "../types";
import { articleDetailsCommentsReducer } from "./articleDetailsCommentsSlice";

export const articleDetailsPageReducer =
  combineReducers<IArticleDetailsPageSchema>({
    comments: articleDetailsCommentsReducer,
  });
