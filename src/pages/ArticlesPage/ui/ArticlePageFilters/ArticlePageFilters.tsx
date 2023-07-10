import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "shared/lib/hooks/userAppDIspatch/userAppDIspatch";
import { useDebounce } from "shared/lib/hooks/useDebounce/useDebounce";
import { classNames } from "shared/lib/classNames/classNames";
import { Input } from "shared/ui/Input";
import { ArticleView, ArticleViewSelector } from "entities/Article";
import { ArticleSortSelector } from "entities/Article/ui/ArticleSortSelector/ArticleSortSelector";
import { TArticleOrder } from "shared/types";
import { fetchArticlesList } from "pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList";
import {
  getArticlesOrder,
  getArticlesPageView,
  getArticlesSearch,
  getArticlesSort,
} from "../../model/selectors/articles";
import { articlesPageActions } from "../../model/slices/articlesPageSlice";
import { ArticleSortField } from "../../model/types/articlesPageSchema";
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

    // const onChange

    return (
      <div className={classNames(css.ArticlePageFilters, {}, [className])}>
        <ArticleSortSelector
          sort={sort}
          order={order}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />

        <ArticleViewSelector view={viewArticles} onViewClick={onChangeView} />

        <form className={css.ArticlePageFilters__search}>
          <Input
            value={search}
            placeholder={t("Поиск")}
            onChange={onChangeSearch}
          />
        </form>
      </div>
    );
  }
);
