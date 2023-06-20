import { FC } from "react";
import { useTheme } from "app/providers/ThemeProvider";
import HeaderNavigation, { INavigationProps } from "./HeaderNavigation";
import ThemeSwitcher from "shared/ui/ThemeSwitcher";
import Wrapper from "shared/ui/Wrapper";
import { classNames } from "shared/lib/classNames";
import { Theme } from "shared/types/common";
import css from "./Header.module.scss";
import LangSwitcher from "widgets/LangSwitcher/ui/LangSwitcher";

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
