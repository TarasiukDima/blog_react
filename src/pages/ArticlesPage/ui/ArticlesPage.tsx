import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/userAppDIspatch/userAppDIspatch";
import {
  ArticleList,
  ArticleView,
  ArticleViewSelector,
} from "entities/Article";
import { Section } from "shared/ui/Section";
import { Title } from "shared/ui/Title";
import {
  DynamicModulesLoader,
  TReducersList,
} from "shared/lib/components/DynamicModulesLoader/DynamicModulesLoader";
import {
  articlesPageActions,
  articlesPageReducer,
  getArticles,
} from "../model/slices/articlesPageSlice";
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from "../model/selectors/articles";
import { fetchNextArticlesPage } from "../model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import { initArticlesPage } from "../model/services/initArticlesPage/initArticlesPage";

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

  useInitialEffect(() => {
    dispatch(initArticlesPage());
  });

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch]
  );

  const onLoadNextPage = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  return (
    <DynamicModulesLoader reducers={reducers} removeAfterUnmount={false}>
      <Section onScrollEnd={onLoadNextPage}>
        <Title Tag="h1">{t("Статьи")}</Title>

        <ArticleViewSelector view={viewArticles} onViewClick={onChangeView} />

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
