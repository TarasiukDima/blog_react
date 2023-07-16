import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { routesPath } from "app/config/roteConfig";
import { Dropdown } from "shared/ui/Popups";
import { Avatar } from "shared/ui/Avatar";
import { useSelector } from "react-redux";
import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from "entities/User";
import { useAppDispatch } from "shared/lib/hooks/userAppDIspatch/userAppDIspatch";

interface IAvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = memo(({ className }: IAvatarDropdownProps) => {
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const canShowAdminPage = isAdmin || isManager;
  const dispatch = useAppDispatch();

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (!authData) {
    return null;
  }

  return (
    <Dropdown
      className={className}
      items={[
        ...(canShowAdminPage ?
          [
            {
              id: 111,
              content: t("Админ панель"),
              href: routesPath.admin_panel,
            },
          ] :
          []),
        {
          id: 222,
          content: t("Профиль"),
          href: `${routesPath.profile}/${authData.id}`,
        },
        {
          id: 333,
          content: t("Выйти"),
          onClick: onLogout,
          ariaLabel: t("Кнопка выйти из личного кабинета"),
        },
      ]}
      trigger={<Avatar src={authData.avatar} />}
      roundedTrigger
      direction="bottom right"
    />
  );
});
