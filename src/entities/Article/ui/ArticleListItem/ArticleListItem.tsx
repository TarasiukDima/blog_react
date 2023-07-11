import { memo } from "react";
import { ArticleView, IArticle } from "../../model/types/article";
import { ArticleListItemBig } from "./ArticleListItemBig";
import { ArticleListItemSmall } from "./ArticleListItemSmall";

interface IArticleListItemProps {
  className?: string;
  article: IArticle;
  view?: ArticleView;
}

export const ArticleListItem = memo(
  ({
    className = "",
    article,
    view = ArticleView.GRID,
  }: IArticleListItemProps) => {
    if (view === ArticleView.GRID) {
      return <ArticleListItemSmall className={className} article={article} />;
    }

    return <ArticleListItemBig className={className} article={article} />;
  }
);
