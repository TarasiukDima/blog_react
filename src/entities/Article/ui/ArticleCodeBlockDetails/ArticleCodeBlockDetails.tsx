import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Code } from "shared/ui/Code";
import { IArticleCodeBlock } from "../../model/types/article";
import css from "./ArticleCodeBlockDetails.module.scss";

interface IArticleCodeBlockDetailsProps {
  className?: string;
  block: IArticleCodeBlock;
}

export const ArticleCodeBlockDetails = memo(
  ({ className = "", block }: IArticleCodeBlockDetailsProps) => {
    const { t } = useTranslation("articles");

    return (
      <Code
        className={classNames(css.ArticleCodeBlockDetails, {}, [className])}
        text={block.code}
      />
    );
  }
);
