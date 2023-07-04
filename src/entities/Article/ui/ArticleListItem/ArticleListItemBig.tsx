import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, VariantLink } from "shared/ui/AppLink";
import { Paragraph } from "shared/ui/Paragraph";
import { Title } from "shared/ui/Title";
import { routesPath } from "app/config/roteConfig";
import { Icon } from "shared/ui/Icon";
import { Avatar } from "shared/ui/Avatar";
import EyeIcon from "shared/assets/icons/eye.svg";
import defaultImg from "shared/assets/images/placeholder.png";
import {
  ArticleBlockType,
  IArticle,
  IArticleTextBlock,
} from "../../model/types/article";
import css from "./ArticleListItem.module.scss";

interface IArticleListItemBigProps {
  className?: string;
  article: IArticle;
}

export const ArticleListItemBig = memo(
  ({ className = "", article }: IArticleListItemBigProps) => {
    const { t } = useTranslation("articles");

    const textBlock = article.blocks.find(
      (item) => item.type === ArticleBlockType.TEXT
    ) as IArticleTextBlock;

    return (
      <li
        className={classNames(css.ArticleListItem, {}, [
          className,
          css.big_item,
        ])}
      >
        <div className={css.ArticleListItem__top}>
          <Avatar src={article.user.avatar} size={40} position="left" />

          <Paragraph className={css.ArticleListItem__top_user}>
            {article.user.username}
          </Paragraph>

          <Paragraph className={css.ArticleListItem__top_date}>
            {article.createdAt}
          </Paragraph>
        </div>

        <Title Tag="h2" className={css.ArticleListItem__title}>
          {article.title}
        </Title>

        <Paragraph className={css.ArticleListItem__type}>
          {article.type.join(", ")}
        </Paragraph>

        <div className={css.ArticleListItem__imageWrapper}>
          <img
            className={css.ArticleListItem__imageWrapper_image}
            src={article.img || defaultImg}
            alt={article.title}
          />

          <Paragraph className={css.ArticleListItem__imageWrapper_date}>
            {article.createdAt}
          </Paragraph>
        </div>

        {textBlock && (
          <Paragraph className={css.ArticleListItem__content}>
            {textBlock.paragraphs}
          </Paragraph>
        )}

        <div className={css.ArticleListItem__bottom}>
          <AppLink
            className={css.ArticleListItem__bottom_link}
            to={`${routesPath.articles}/${article.id}`}
            variant={VariantLink.BUTTON_LINK}
          >
            {t("Читать дальше")}
            ...
          </AppLink>

          <Paragraph className={css.ArticleListItem__bottom_views}>
            {article.views}
            <Icon Svg={EyeIcon} />
          </Paragraph>
        </div>
      </li>
    );
  }
);
