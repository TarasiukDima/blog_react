import { EntityState } from "@reduxjs/toolkit";
import { ArticleView, IArticle } from "entities/Article";
import { TArticleOrder } from "shared/types";

export enum ArticleSortField {
  VIEWS = "views",
  TITLE = "title",
  CREATED = "created",
}

export interface IArticlesPageSchema extends EntityState<IArticle> {
  isLoading: boolean;
  error?: string;

  // pagination
  page: number;
  limit: number;
  hasMore: boolean;

  // filters
  view: ArticleView;
  order: TArticleOrder;
  sort: ArticleSortField;
  search: string;

  _inited: boolean;
}
