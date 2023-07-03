import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Title } from "shared/ui/Title";
import { Paragraph } from "shared/ui/Paragraph";
import { IArticleTextBlock } from "../../model/types/article";
import css from "./ArticleTextBlockDetails.module.scss";

interface IArticleTextBlockDetailsProps {
  className?: string;
  block: IArticleTextBlock;
}

export const ArticleTextBlockDetails = memo(
  ({ className = "", block }: IArticleTextBlockDetailsProps) => {
    const { t } = useTranslation("articles");

    return (
      <div className={classNames(css.ArticleTextBlockDetails, {}, [className])}>
        {block.title && (
          <Title className={css.ArticleTextBlockDetails__title} Tag="h2">
            {block.title}
          </Title>
        )}
        {block.paragraphs.map((oneParagraph) => (
          <Paragraph
            className={css.ArticleTextBlockDetails__text}
            key={oneParagraph}
          >
            {oneParagraph}
          </Paragraph>
        ))}
      </div>
    );
  }
);
