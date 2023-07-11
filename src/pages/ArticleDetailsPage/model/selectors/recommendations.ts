import { IStateSchema } from "app/providers/StoreProvider";

export const getArticleRecommendationsIsLoading = (state: IStateSchema) => {
  return state.articleDetailsPage?.recommendations?.isLoading || false;
};

export const getArticleRecommendationsError = (state: IStateSchema) => {
  return state.articleDetailsPage?.recommendations?.error;
};
