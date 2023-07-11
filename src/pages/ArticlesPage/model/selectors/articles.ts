import { IStateSchema } from "app/providers/StoreProvider";
import { OrderVariants } from "shared/types";
import { ArticleType, ArticleView } from "../../../../entities/Article";
import { ArticleSortField } from "../types/articlesPageSchema";

export const getArticlesPageIsLoading = (state: IStateSchema) => state.articlesPage?.isLoading || false;
export const getArticlesPageError = (state: IStateSchema) => state.articlesPage?.error;
export const getArticlesPageView = (state: IStateSchema) => state.articlesPage?.view || ArticleView.GRID;
export const getArticlesPageLimit = (state: IStateSchema) => state.articlesPage?.limit || 12;
export const getArticlesPageHasMore = (state: IStateSchema) => state.articlesPage?.hasMore;
export const getArticlesCurrentPage = (state: IStateSchema) => state.articlesPage?.page || 1;
export const getArticlesInitedState = (state: IStateSchema) => state.articlesPage?._inited;
export const getArticlesSort = (state: IStateSchema) => state.articlesPage?.sort ?? ArticleSortField.TITLE;
export const getArticlesOrder = (state: IStateSchema) => state.articlesPage?.order ?? OrderVariants.ASC;
export const getArticlesSearch = (state: IStateSchema) => state.articlesPage?.search ?? "";
export const getArticlesType = (state: IStateSchema) => state.articlesPage?.type ?? ArticleType.ALL;
