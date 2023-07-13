import { CSSProperties, HTMLAttributeAnchorTarget, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui/AppLink";
import { Span, SpanVariants } from "shared/ui/Span";
import { routesPath } from "app/config/roteConfig";
import { Icon } from "shared/ui/Icon";
import EyeIcon from "shared/assets/icons/eye.svg";
import defaultImg from "shared/assets/images/placeholder.png";
import { IArticle } from "../../model/types/article";
import css from "./ArticleListItem.module.scss";

interface IArticleListItemSmallProps {
  className?: string;
  article: IArticle;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItemSmall = memo(
  ({ className = "", article, target }: IArticleListItemSmallProps) => (
    <div
      className={classNames(css.ArticleListItem, {}, [
        className,
        css.small_item,
      ])}
    >
      <AppLink
        className={css.ArticleListItem__link}
        to={`${routesPath.articles}/${article.id}`}
        target={target}
      >
        <Span
          className={css.ArticleListItem__imageWrapper}
          variant={SpanVariants.BLOCK}
        >
          <img
            className={css.ArticleListItem__imageWrapper_image}
            src={article.img || defaultImg}
            alt={article.title}
          />
          <Span className={css.ArticleListItem__imageWrapper_date}>
            {article.createdAt}
          </Span>
        </Span>

        <Span
          className={css.ArticleListItem__link_info}
          variant={SpanVariants.BLOCK}
        >
          <Span className={css.ArticleListItem__link_type}>
            {article.type.join(", ")}
          </Span>

          <Span className={css.ArticleListItem__link_views}>
            {article.views}
            <Icon Svg={EyeIcon} />
          </Span>
        </Span>

        <Span className={css.ArticleListItem__link_title}>{article.title}</Span>
      </AppLink>
    </div>
  )
);
