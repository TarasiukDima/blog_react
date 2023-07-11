import { IStateSchema } from "app/providers/StoreProvider";

export const getArticleCommentsIsLoading = (state: IStateSchema) => {
  return state.articleDetailsPage?.comments?.isLoading || false;
};

export const getArticleCommentsError = (state: IStateSchema) => {
  return state.articleDetailsPage?.comments?.error;
};
