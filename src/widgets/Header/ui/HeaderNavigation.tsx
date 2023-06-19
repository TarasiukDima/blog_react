import { FC } from "react";
import css from "./Header.module.scss";
import { TRouteObject } from "shared/types/common";
import AppLink from "shared/ui/AppLink/ui/AppLink";

export interface INavigationProps {
  navigationApp: Array<TRouteObject>;
  className?: string;
}

const HeaderNavigation: FC<INavigationProps> = ({ navigationApp }) => {
  if (!navigationApp.length) return null;

  return (
    <nav className={css.header__nav}>
      <ul className={css.header__nav_list}>
        {navigationApp.map(({ path, id, routeName }) => (
          <li key={id}>
            <AppLink to={path}>{routeName}</AppLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
