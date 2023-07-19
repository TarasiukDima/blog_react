import { EntityState } from "@reduxjs/toolkit";
import { ArticleType, ArticleView, IArticle } from "@/entities/Article";
import { TArticleOrder } from "@/shared/types";
import { ArticleSortField } from "../consts/consts";

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
  type: ArticleType;

  _inited: boolean;
}
