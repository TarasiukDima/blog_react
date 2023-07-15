import { FC, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { useTheme } from "app/providers/ThemeProvider";
import { Button } from "shared/ui/Button";
import { Theme } from "shared/const/common";
import { VariantButton } from "shared/ui/Button/ui/Button";
import css from "./ThemeSwitcher.module.scss";

interface IThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: FC<IThemeSwitcherProps> = memo(
  ({ className = "" }: IThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    const { t } = useTranslation();
    const buttonTitleText = t("Кнопка для переключения темы");

    return (
      <Button
        className={classNames(
          css.ThemeSwitcher,
          { [css.dark]: theme === Theme.DARK },
          [className]
        )}
        variant={VariantButton.CLEAR}
        onClick={toggleTheme}
        aria-label={buttonTitleText}
        title={buttonTitleText}
      />
    );
  }
);

export { ThemeSwitcher };
