import { FC } from "react";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { Wrapper } from "shared/ui/Wrapper";
import { LangSwitcher } from "widgets/LangSwitcher";
import { LogIn } from "widgets/LogIn";
import { Theme } from "shared/const/common";
import { INavigationProps, Navigation } from "widgets/Navigation";
import css from "./Header.module.scss";

const Header: FC<INavigationProps> = ({ navigationApp }) => {
  const { theme } = useTheme();

  return (
    <header
      className={classNames(css.header, { [css.dark]: theme === Theme.DARK })}
    >
      <Wrapper className={css.wrapper}>
        <Navigation navigationApp={navigationApp} />

        <LangSwitcher />
        <ThemeSwitcher />
        <LogIn />
      </Wrapper>
    </header>
  );
};

export { Header };
