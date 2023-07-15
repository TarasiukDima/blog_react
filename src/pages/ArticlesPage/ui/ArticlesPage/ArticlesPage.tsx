import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "shared/lib/hooks/userAppDIspatch/userAppDIspatch";
import { Section } from "shared/ui/Section";
import { Title } from "shared/ui/Title";
import {
  DynamicModulesLoader,
  TReducersList,
} from "shared/lib/components/DynamicModulesLoader/DynamicModulesLoader";
import { articlesPageReducer } from "../../model/slices/articlesPageSlice";
import { fetchNextArticlesPage } from "../../model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import { ArticlePageFilters } from "../ArticlePageFilters/ArticlePageFilters";
import { ArticleInfiniteList } from "../ArticleInfiniteList/ArticleInfiniteList";

const reducers: TReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = () => {
  const { t } = useTranslation("articles");
  const dispatch = useAppDispatch();

  const onLoadNextPage = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  return (
    <DynamicModulesLoader reducers={reducers} removeAfterUnmount={false}>
      <Section onScrollEnd={onLoadNextPage}>
        <Title Tag="h1">{t("Статьи")}</Title>

        <ArticlePageFilters />
        <ArticleInfiniteList />
      </Section>
    </DynamicModulesLoader>
  );
};

export default memo(ArticlesPage);
