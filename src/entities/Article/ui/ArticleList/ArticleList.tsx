import { HTMLAttributeAnchorTarget, memo } from "react";
import { useTranslation } from "react-i18next";
import { Paragraph } from "@/shared/ui/Paragraph";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ArticleView } from "../../model/consts/consts";
import { IArticle } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemBigSkeleton } from "../ArticleListItem/ArticleListItemBigSkeleton";
import { ArticleListItemSmallSkeleton } from "../ArticleListItem/ArticleListItemSmallSkeleton";
import css from "./ArticleList.module.scss";

interface IArticleListProps {
  className?: string;
  articles: Array<IArticle>;
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
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
    target,
    view = ArticleView.GRID,
  }: IArticleListProps) => {
    const { t } = useTranslation("articles");
    const isBig = view === ArticleView.LIST;
    const itemsPerRow = isBig ? 1 : 4;
    const rowCount = isBig ?
      articles.length :
      Math.ceil(articles.length / itemsPerRow);

    if (!isLoading && articles.length === 0) {
      return <Paragraph>{t("Статьи не найдены!")}</Paragraph>;
    }

    return (
      <ul className={classNames(css.ArticleList, {}, [className, css[view]])}>
        {articles.map((oneArticle) => (
          <ArticleListItem
            key={oneArticle.id}
            article={oneArticle}
            view={view}
            target={target}
          />
        ))}

        {isLoading && getSkeletons(view)}
      </ul>
    );
  }
);
