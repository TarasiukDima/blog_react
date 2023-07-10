import { memo, useCallback, useRef } from "react";
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
import { fetchArticlesList } from "../model/services/fetchArticlesList/fetchArticlesList";
import {
  getArticlesCurrentPage,
  getArticlesPageError,
  getArticlesPageHasMore,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from "../model/selectors/articles";
import { fetchNextArticlesPage } from "../model/services/fetchNextArticlesPage/fetchNextArticlesPage";

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
  const page = useSelector(getArticlesCurrentPage);
  const hasMore = useSelector(getArticlesPageHasMore);

  useInitialEffect(() => {
    dispatch(articlesPageActions.initState());
    dispatch(fetchArticlesList({ page: 1 }));
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
    <DynamicModulesLoader reducers={reducers}>
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
