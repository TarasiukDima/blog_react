import { FC } from "react";
import { useTranslation } from "react-i18next";
import { TRouteObject } from "shared/types/common";
import { AppLink } from "shared/ui/AppLink";
import css from "./Header.module.scss";

export interface INavigationProps {
  navigationApp: Array<TRouteObject>;
}

const HeaderNavigation: FC<INavigationProps> = ({ navigationApp }) => {
  const { t } = useTranslation();

  if (!navigationApp.length) return null;

  return (
    <nav className={css.header__nav}>
      <ul className={css.header__nav_list}>
        {navigationApp.map(({ path, id, routeTextKey }) => (
          <li key={id}>
            <AppLink to={path}>{t(`header.${routeTextKey}`)}</AppLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { HeaderNavigation };
