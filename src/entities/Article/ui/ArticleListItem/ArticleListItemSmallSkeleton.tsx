import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Skeleton } from "shared/ui/Skeleton";
import css from "./ArticleListItem.module.scss";

interface IArticleListItemSmallSkeletonProps {
  className?: string;
}

export const ArticleListItemSmallSkeleton = memo(
  ({ className = "" }: IArticleListItemSmallSkeletonProps) => (
    <li
      className={classNames(css.ArticleListItem, {}, [
        className,
        css.small_item_skeleton,
      ])}
    >
      <div className={css.ArticleListItem__link}>
        <Skeleton
          className={css.ArticleListItem__image}
          height={200}
          type="square"
        />

        <div className={css.ArticleListItem__link_info}>
          <Skeleton width="50%" height={20} type="square" />

          <Skeleton width="20%" height={20} type="square" />
        </div>

        <div className={css.ArticleListItem__title}>
          <Skeleton
            height={25}
            type="square"
          />
        </div>
      </div>
    </li>
  )
);
