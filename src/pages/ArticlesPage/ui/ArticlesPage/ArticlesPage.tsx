import { memo, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/userAppDIspatch/userAppDIspatch";
import { ArticleList } from "entities/Article";
import { Section } from "shared/ui/Section";
import { Title } from "shared/ui/Title";
import {
  DynamicModulesLoader,
  TReducersList,
} from "shared/lib/components/DynamicModulesLoader/DynamicModulesLoader";
import {
  articlesPageReducer,
  getArticles,
} from "../../model/slices/articlesPageSlice";
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from "../../model/selectors/articles";
import { fetchNextArticlesPage } from "../../model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import { initArticlesPage } from "../../model/services/initArticlesPage/initArticlesPage";
import { ArticlePageFilters } from "../ArticlePageFilters/ArticlePageFilters";

const reducers: TReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = () => {
  const { t } = useTranslation("articles");
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoadingArticles = useSelector(getArticlesPageIsLoading);
  const errorArticles = useSelector(getArticlesPageError);
  const viewArticles = useSelector(getArticlesPageView);
  const { 0: searchParams } = useSearchParams();

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  const onLoadNextPage = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  return (
    <DynamicModulesLoader reducers={reducers} removeAfterUnmount={false}>
      <Section onScrollEnd={onLoadNextPage}>
        <Title Tag="h1">{t("Статьи")}</Title>

        <ArticlePageFilters />

        <ArticleList
          articles={articles}
          view={viewArticles}
          isLoading={isLoadingArticles}
        />
      </Section>
    </DynamicModulesLoader>
  );
};

export default memo(ArticlesPage);
