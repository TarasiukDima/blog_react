import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import GridIcon from "shared/assets/icons/grid.svg";
import ListIcon from "shared/assets/icons/list.svg";
import { Button, VariantButton } from "shared/ui/Button";
import { Icon } from "shared/ui/Icon";
import { ArticleView } from "../../model/types/article";
import css from "./ArticleViewSelector.module.scss";

interface IArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.GRID,
    icon: GridIcon,
  },
  {
    view: ArticleView.LIST,
    icon: ListIcon,
  },
];

export const ArticleViewSelector = memo(
  ({ className = "", view, onViewClick }: IArticleViewSelectorProps) => {
    const { t } = useTranslation("articles");

    const clickHandler = (newView: ArticleView) => () => {
      onViewClick?.(newView);
    };

    return (
      <div className={classNames(css.ArticleViewSelector, {}, [className])}>
        {viewTypes.map((el) => (
          <Button
            className={view === el.view ? css.active : ""}
            key={el.view}
            onClick={clickHandler(el.view)}
            variant={VariantButton.ICON_BUTTON}
          >
            <Icon Svg={el.icon} />
          </Button>
        ))}
      </div>
    );
  }
);