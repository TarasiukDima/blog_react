import { memo, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { ArticleSortField } from "pages/ArticlesPage";
import { Select, SelectOptions } from "shared/ui/Select";
import { OrderVariants } from "shared/const/common";
import { TArticleOrder } from "shared/types";
import { HStack } from "shared/ui/Stack";
import css from "./ArticleSortSelector.module.scss";

interface IArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: TArticleOrder;
  onChangeSort: (newOrder: ArticleSortField) => void;
  onChangeOrder: (newOrder: TArticleOrder) => void;
}

export const ArticleSortSelector = memo(
  ({
    className,
    sort,
    order,
    onChangeOrder,
    onChangeSort,
  }: IArticleSortSelectorProps) => {
    const { t } = useTranslation("articles");

    const optionsSort = useMemo<Array<SelectOptions<ArticleSortField>>>(
      () => [
        {
          content: t("дате создания"),
          value: ArticleSortField.CREATED,
        },
        {
          content: t("названию"),
          value: ArticleSortField.TITLE,
        },
        {
          content: t("просмотрам"),
          value: ArticleSortField.VIEWS,
        },
      ],
      [t]
    );

    const optionsOrder = useMemo<Array<SelectOptions<TArticleOrder>>>(
      () => [
        {
          content: t("возрастанию"),
          value: OrderVariants.ASC,
        },
        {
          content: t("убыванию"),
          value: OrderVariants.DESC,
        },
      ],
      [t]
    );

    return (
      <HStack
        wrap="wrap"
        justify="start"
        align="stretch"
        className={classNames(css.ArticleSortSelector, {}, [className])}
      >
        <Select
          className={css.ArticleSortSelector__item}
          options={optionsSort}
          placeholder={t("Сортировать по")}
          value={sort}
          onChange={onChangeSort}
        />

        <Select
          className={css.ArticleSortSelector__item}
          options={optionsOrder}
          placeholder={t("Сортировать по")}
          value={order}
          onChange={onChangeOrder}
        />
      </HStack>
    );
  }
);
