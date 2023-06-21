import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { Theme } from "shared/types/common";
import { Button } from "shared/ui/Button";
import css from "./ThemeSwitcher.module.scss";

interface IThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: FC<IThemeSwitcherProps> = ({ className = "" }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames(
        css.ThemeSwitcher,
        {
          [css.dark]: theme === Theme.DARK,
        },
        [className]
      )}
      onClick={toggleTheme}
      aria-label="Switcher theme button."
      title="Switcher theme button."
    />
  );
};

export { ThemeSwitcher };
