import { ReactNode, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button";
import { classNames } from "shared/lib/classNames/classNames";
import css from "./Tabs.module.scss";

export interface ITabItem {
  value: string;
  content: ReactNode;
}

interface ITabsProps {
  className?: string;
  tabs: Array<ITabItem>;
  valueActive: string;
  onTabClick: (tab: ITabItem) => void;
}

export const Tabs = memo(
  ({ className, tabs, valueActive, onTabClick }: ITabsProps) => {
    const { t } = useTranslation("");

    const clickHandler = useCallback(
      (tab: ITabItem) => () => {
        onTabClick(tab);
      },
      [onTabClick]
    );

    return (
      <div className={classNames(css.Tabs, {}, [className])}>
        {tabs.map((tab, index) => (
          <Button
            className={classNames(
              css.Tabs__item,
              {
                [css.activeTab]: tab.value === valueActive,
              },
              []
            )}
            key={tab.value}
            onClick={clickHandler(tab)}
          >
            {tab.value}
          </Button>
        ))}
      </div>
    );
  }
);
