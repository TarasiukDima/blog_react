import { FC, memo, useCallback, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { LoginModal } from "features/AuthByUsername";
import { Button } from "shared/ui/Button";
import { VariantButton } from "shared/ui/Button/ui/Button";
import { useAppDispatch } from "shared/lib/hooks/userAppDIspatch/userAppDIspatch";
import { routesPath } from "app/config/roteConfig";
import { Dropdown } from "shared/ui/Dropdown";
import { Avatar } from "shared/ui/Avatar";
import { ButtonSize } from "shared/const/common";
import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from "../../../entities/User";
import LoginIcon from "../assets/login.svg";
import UserIcon from "../assets/user.svg";

const LogIn: FC = memo(() => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const authData = useSelector(getUserAuthData);
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const dispatch = useAppDispatch();

  const onShowModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    const canShowAdminPage = isAdmin || isManager;

    return (
      <Dropdown
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
  }

  return (
    <>
      <Button
        variant={VariantButton.ICON_BUTTON}
        size={ButtonSize.L}
        aria-label={t("Кнопка войти в личный кабинет")}
        onClick={onShowModal}
      >
        <LoginIcon />
      </Button>

      {!authData && <LoginModal isOpen={isOpen} onClose={onCloseModal} />}
    </>
  );
});

export { LogIn };
