import { ReactNode, memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import css from "./Tabs.module.scss";

export interface ITabItem {
  value?: string;
  content?: ReactNode;
}

interface ITabsProps {
  className?: string;
  tabs: Array<ITabItem>;
  value: string;
  onTabClick: (tab: ITabItem) => void;
}

export const Tabs = memo(
  ({ className, tabs, value, onTabClick }: ITabsProps) => {
    const { t } = useTranslation("");
    return (
      <div className={classNames(css.Tabs, {}, [className])}>
        {tabs.map(() => {})}
      </div>
    );
  }
);
