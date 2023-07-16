import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Skeleton } from "shared/ui/Skeleton";
import { HStack } from "shared/ui/Stack";
import css from "./ArticleListItem.module.scss";

interface IArticleListItemBigSkeletonProps {
  className?: string;
}

export const ArticleListItemBigSkeleton = memo(
  ({ className = "" }: IArticleListItemBigSkeletonProps) => (
    <li
      className={classNames(css.ArticleListItem, {}, [
        className,
        css.big_item_skeleton,
      ])}
    >
      <HStack align="center" className={css.ArticleListItem__top}>
        <Skeleton
          className={css.ArticleListItem__top_avatar}
          width={40}
          height={40}
          type="circle"
        />

        <Skeleton
          className={css.ArticleListItem__top_user}
          width="15%"
          height={25}
          type="square"
          noMargin={false}
        />

        <Skeleton
          className={css.ArticleListItem__top_date}
          width="10%"
          height={20}
          type="square"
          place="left"
        />
      </HStack>

      <Skeleton
        className={css.ArticleListItem__title}
        width="100%"
        height={25}
        type="square"
      />

      <Skeleton
        className={css.ArticleListItem__type}
        width="30%"
        height={15}
        type="square"
      />

      <div className={css.ArticleListItem__imageWrapper}>
        <Skeleton
          className={css.ArticleListItem__imageWrapper_image}
          height="100%"
          type="square"
        />
      </div>

      <Skeleton height={200} type="square" />

      <HStack
        allWidth
        justify="between"
        align="center"
        className={css.ArticleListItem__bottom}
      >
        <Skeleton
          className={css.ArticleListItem__bottom_link}
          width="20%"
          height={40}
          type="square"
          place="left"
        />

        <Skeleton
          className={css.ArticleListItem__bottom_views}
          width="15%"
          height={25}
          type="square"
          place="left"
        />
      </HStack>
    </li>
  )
);
