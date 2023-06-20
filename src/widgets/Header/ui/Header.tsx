import { FC } from "react";
import { useTheme } from "app/providers/ThemeProvider";
import ThemeSwitcher from "shared/ui/ThemeSwitcher";
import Wrapper from "shared/ui/Wrapper";
import { classNames } from "shared/lib/classNames";
import { Theme } from "shared/types/common";
import LangSwitcher from "widgets/LangSwitcher/ui/LangSwitcher";
import css from "./Header.module.scss";
import HeaderNavigation, { INavigationProps } from "./HeaderNavigation";

const Header: FC<INavigationProps> = ({ navigationApp }) => {
  const { theme } = useTheme();

  return (
    <header
      className={classNames(css.header, { [css.dark]: theme === Theme.DARK })}
    >
      <Wrapper className={css.wrapper}>
        <HeaderNavigation navigationApp={navigationApp} />

        <LangSwitcher theme={theme} />
        <ThemeSwitcher />
      </Wrapper>
    </header>
  );
};

export default Header;
