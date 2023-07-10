import { IStateSchema } from "app/providers/StoreProvider";
import { ArticleView } from "../../../../entities/Article";

export const getArticlesPageIsLoading = (state: IStateSchema) => state.articlesPage?.isLoading || false;
export const getArticlesPageError = (state: IStateSchema) => state.articlesPage?.error;
export const getArticlesPageView = (state: IStateSchema) => state.articlesPage?.view || ArticleView.GRID;
export const getArticlesPageLimit = (state: IStateSchema) => state.articlesPage?.limit || 12;
export const getArticlesPageHasMore = (state: IStateSchema) => state.articlesPage?.hasMore;
export const getArticlesCurrentPage = (state: IStateSchema) => state.articlesPage?.page || 1;
export const getArticlesInitedState = (state: IStateSchema) => state.articlesPage?._inited;
