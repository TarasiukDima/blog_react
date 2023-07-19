import { memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { ITabItem, Tabs } from "@/shared/ui/Tabs";
import { ArticleType } from "../../model/consts/consts";

interface IArticleTypeTabsProps {
  className?: string;
  articleType: ArticleType;
  onChangeTab: (tab: ITabItem) => void;
}

export const ArticleTypeTabs = memo(
  ({ className = "", onChangeTab, articleType }: IArticleTypeTabsProps) => {
    const { t } = useTranslation("articles");

    const onClickItem = useCallback(
      (tab: ITabItem) => {
        onChangeTab(tab);
      },
      [onChangeTab]
    );

    const typeTabs = useMemo<Array<ITabItem>>(
      () => [
        {
          value: ArticleType.ALL,
          content: t("Все"),
        },
        {
          value: ArticleType.IT,
          content: t("Айти"),
        },
        {
          value: ArticleType.ECONOMICS,
          content: t("Экономика"),
        },
        {
          value: ArticleType.SCIENCE,
          content: t("Наука"),
        },
      ],
      [t]
    );

    return (
      <Tabs
        onTabClick={onClickItem}
        tabs={typeTabs}
        valueActive={articleType}
      />
    );
  }
);
