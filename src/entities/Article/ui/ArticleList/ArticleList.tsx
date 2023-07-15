import { HTMLAttributeAnchorTarget, memo } from "react";
import { useTranslation } from "react-i18next";
import { List, ListRowProps, WindowScroller } from "react-virtualized";
import { Paragraph } from "shared/ui/Paragraph";
import { classNames } from "shared/lib/classNames/classNames";
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
  virtualized?: boolean;
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
    virtualized = true,
    target,
    view = ArticleView.GRID,
  }: IArticleListProps) => {
    const { t } = useTranslation("articles");
    const isBig = view === ArticleView.LIST;
    const itemsPerRow = isBig ? 1 : 4;
    const rowCount = isBig ?
      articles.length :
      Math.ceil(articles.length / itemsPerRow);

    const rowRender = ({ index, isScrolling, key, style }: ListRowProps) => {
      const items = [];
      const fromIndex = index * itemsPerRow;
      const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

      for (let i = fromIndex; i < toIndex; i += 1) {
        items.push(
          <ArticleListItem
            key={articles[i].id}
            article={articles[i]}
            view={view}
            target={target}
          />
        );
      }

      return (
        <div key={key} style={style} className={css.row}>
          {items}
        </div>
      );
    };

    if (!isLoading && articles.length === 0) {
      return <Paragraph>{t("Статьи не найдены!")}</Paragraph>;
    }

    if (!virtualized) {
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

    return (
      <WindowScroller>
        {({ width, height, onChildScroll, isScrolling, scrollTop }) => (
          <div
            className={classNames(css.ArticleList, {}, [className, css[view]])}
          >
            <List
              width={width ?? 700}
              height={height ?? 700}
              rowHeight={isBig ? height : 350}
              rowCount={rowCount}
              rowRenderer={rowRender}
              autoHeight
              onScroll={onChildScroll}
              isScrolling={isScrolling}
              scrollTop={scrollTop}
            />
            {isLoading && getSkeletons(view)}
          </div>
        )}
      </WindowScroller>
    );
  }
);
