import { memo } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/userAppDIspatch/userAppDIspatch";
import { ArticleList } from "entities/Article";
import { getArticles } from "pages/ArticlesPage/model/slices/articlesPageSlice";
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from "pages/ArticlesPage/model/selectors/articles";
import { initArticlesPage } from "pages/ArticlesPage/model/services/initArticlesPage/initArticlesPage";

export const ArticleInfiniteList = memo(() => {
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoadingArticles = useSelector(getArticlesPageIsLoading);
  const errorArticles = useSelector(getArticlesPageError);
  const viewArticles = useSelector(getArticlesPageView);
  const { 0: searchParams } = useSearchParams();

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  return (
    <ArticleList
      articles={articles}
      view={viewArticles}
      isLoading={isLoadingArticles}
    />
  );
});
