import { memo, useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "@/shared/lib/hooks/userAppDIspatch/userAppDIspatch";
import { useDebounce } from "@/shared/lib/hooks/useDebounce/useDebounce";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Input } from "@/shared/ui/Input";
import {
  ArticleType,
  ArticleTypeTabs,
  ArticleView,
  ArticleViewSelector,
} from "@/entities/Article";
import { ArticleSortSelector } from "@/entities/Article/ui/ArticleSortSelector/ArticleSortSelector";
import { TArticleOrder } from "@/shared/types";
import { Tabs, ITabItem } from "@/shared/ui/Tabs";
import { fetchArticlesList } from "@/pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList";
import {
  getArticlesOrder,
  getArticlesPageView,
  getArticlesSearch,
  getArticlesSort,
  getArticlesType,
} from "../../model/selectors/articles";
import { articlesPageActions } from "../../model/slices/articlesPageSlice";
import { ArticleSortField } from "../../model/consts/consts";
import css from "./ArticlePageFilters.module.scss";

interface IArticlePageFiltersProps {
  className?: string;
}

export const ArticlePageFilters = memo(
  ({ className }: IArticlePageFiltersProps) => {
    const { t } = useTranslation("articles");
    const viewArticles = useSelector(getArticlesPageView);
    const dispatch = useAppDispatch();

    const sort = useSelector(getArticlesSort);
    const order = useSelector(getArticlesOrder);
    const search = useSelector(getArticlesSearch);
    const articleType = useSelector(getArticlesType);

    const fetchData = useCallback(() => {
      dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debaunce = useDebounce(fetchData, 500);

    const onChangeView = useCallback(
      (view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
      },
      [dispatch]
    );

    const onChangeSort = useCallback(
      (newSort: ArticleSortField) => {
        dispatch(articlesPageActions.setSort(newSort));
        dispatch(articlesPageActions.setPage(1));
        debaunce();
      },
      [dispatch, debaunce]
    );

    const onChangeOrder = useCallback(
      (newOrder: TArticleOrder) => {
        dispatch(articlesPageActions.setOrder(newOrder));
        dispatch(articlesPageActions.setPage(1));
        debaunce();
      },
      [dispatch, debaunce]
    );

    const onChangeSearch = useCallback(
      (searchString: string) => {
        dispatch(articlesPageActions.setSearch(searchString));
        dispatch(articlesPageActions.setPage(1));
        debaunce();
      },
      [dispatch, debaunce]
    );

    const onChangeTab = useCallback(
      (tab: ITabItem) => {
        dispatch(articlesPageActions.setType(tab.value as ArticleType));
        dispatch(articlesPageActions.setPage(1));
        dispatch(fetchArticlesList({ replace: true }));
      },
      [dispatch]
    );

    return (
      <div className={classNames(css.ArticlePageFilters, {}, [className])}>
        <ArticleSortSelector
          sort={sort}
          order={order}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />

        <ArticleViewSelector view={viewArticles} onViewClick={onChangeView} />

        <div className={css.ArticlePageFilters__search}>
          <Input
            value={search}
            placeholder={t("Поиск")}
            onChange={onChangeSearch}
          />
        </div>

        <ArticleTypeTabs onChangeTab={onChangeTab} articleType={articleType} />
      </div>
    );
  }
);
