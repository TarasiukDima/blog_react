import { FC } from "react";
import { useTranslation } from "react-i18next";
import { ButtonSize, TRouteObject } from "shared/types";
import { AppLink } from "shared/ui/AppLink";
import { VariantLink } from "shared/ui/AppLink/ui/AppLink";
import css from "./Navigation.module.scss";

export interface INavigationProps {
  navigationApp: Array<TRouteObject>;
}

const Navigation: FC<INavigationProps> = ({ navigationApp }) => {
  const { t } = useTranslation();

  if (!navigationApp.length) return null;

  return (
    <nav className={css.Navigation}>
      <ul className={css.Navigation_list}>
        {navigationApp.map(({ path, id, routeTextKey }) => (
          <li key={id}>
            <AppLink
              to={path || ''}
              variant={VariantLink.BUTTON_LINK}
              size={ButtonSize.M}
            >
              {t(routeTextKey)}
            </AppLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { Navigation };
