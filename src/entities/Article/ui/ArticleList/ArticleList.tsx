import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { ArticleView, IArticle } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import css from "./ArticleList.module.scss";
import { ArticleListItemBigSkeleton } from "../ArticleListItem/ArticleListItemBigSkeleton";
import { ArticleListItemSmallSkeleton } from "../ArticleListItem/ArticleListItemSmallSkeleton";

interface IArticleListProps {
  className?: string;
  articles: Array<IArticle>;
  isLoading?: boolean;
  view?: ArticleView;
}

const getSkeletons = (view: ArticleView, className?: string) => {
  const countSkeletonItems = view === ArticleView.GRID ? 8 : 3;
  return (
    <ul className={classNames(css.ArticleList, {}, [className])}>
      {Array.from({ length: countSkeletonItems }, (_, ind) => (view === ArticleView.GRID ? (
        <ArticleListItemSmallSkeleton key={ind} />
      ) : (
        <ArticleListItemBigSkeleton key={ind} />
      )))}
    </ul>
  );
};

export const ArticleList = memo(
  ({
    className = "",
    articles,
    isLoading = false,
    view = ArticleView.GRID,
  }: IArticleListProps) => {
    const { t } = useTranslation("articles");

    if (isLoading) {
      return getSkeletons(view, className);
    }

    if (articles.length === 0) {
      return null;
    }

    return (
      <ul className={classNames(css.ArticleList, {}, [className])}>
        {articles.map((oneArticle) => (
          <ArticleListItem
            key={oneArticle.id}
            article={oneArticle}
            view={view}
          />
        ))}
      </ul>
    );
  }
);
