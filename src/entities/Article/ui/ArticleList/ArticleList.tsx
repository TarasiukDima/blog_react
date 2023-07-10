import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { ArticleView, IArticle } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemBigSkeleton } from "../ArticleListItem/ArticleListItemBigSkeleton";
import { ArticleListItemSmallSkeleton } from "../ArticleListItem/ArticleListItemSmallSkeleton";
import css from "./ArticleList.module.scss";

interface IArticleListProps {
  className?: string;
  articles: Array<IArticle>;
  isLoading?: boolean;
  view?: ArticleView;
}

const getSkeletons = (view: ArticleView, className?: string) => {
  const countSkeletonItems = view === ArticleView.GRID ? 8 : 3;
  return (
    <>
      {Array.from({ length: countSkeletonItems }, (_, ind) => (view === ArticleView.GRID ? (
        <ArticleListItemSmallSkeleton key={ind} />
      ) : (
        <ArticleListItemBigSkeleton key={ind} />
      )))}
    </>
  );
};

export const ArticleList = memo(
  ({
    className = "",
    articles,
    isLoading = false,
    view = ArticleView.GRID,
  }: IArticleListProps) => (
    <ul className={classNames(css.ArticleList, {}, [className])}>
      {articles.map((oneArticle) => (
        <ArticleListItem key={oneArticle.id} article={oneArticle} view={view} />
      ))}

      {isLoading && getSkeletons(view, className)}
    </ul>
  )
);
