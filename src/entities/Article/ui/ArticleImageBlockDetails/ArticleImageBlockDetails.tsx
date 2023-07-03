import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Paragraph } from "shared/ui/Paragraph";
import { IArticleImageBlock } from "../../model/types/article";
import css from "./ArticleImageBlockDetails.module.scss";

interface IArticleImageBlockDetailsProps {
  className?: string;
  block: IArticleImageBlock;
}

export const ArticleImageBlockDetails = memo(
  ({ className = "", block }: IArticleImageBlockDetailsProps) => {
    const { t } = useTranslation("articles");

    return (
      <div
        className={classNames(css.ArticleImageBlockDetails, {}, [className])}
      >
        <img
          className={css.ArticleImageBlockDetails_img}
          src={block.src}
          alt={block.title}
        />
        <Paragraph className={css.ArticleImageBlockDetails_caption}>
          {block.title}
        </Paragraph>
      </div>
    );
  }
);
