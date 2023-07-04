import { FC, memo, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { LoginModal } from "features/AuthByUsername";
import { Button } from "shared/ui/Button";
import { ButtonSize } from "shared/types";
import { VariantButton } from "shared/ui/Button/ui/Button";
import { useAppDispatch } from "shared/lib/hooks/userAppDIspatch/userAppDIspatch";
import { AppLink, VariantLink } from "shared/ui/AppLink";
import { routesPath } from "app/config/roteConfig";
import { getUserAuthData, userActions } from "../../../entities/User";
import LoginIcon from "../assets/login.svg";
import LogoutIcon from "../assets/logout.svg";
import UserIcon from "../assets/user.svg";
import css from "./LogIn.module.scss";

const LogIn: FC = memo(() => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const authData = useSelector(getUserAuthData);
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
    return (
      <div className={css.button__wrapper}>
        <AppLink
          className={css.user__button}
          to={`${routesPath.profile}/${authData.id}`}
          variant={VariantLink.ICON_LINK}
          size={ButtonSize.L}
        >
          <UserIcon />
        </AppLink>

        <Button
          variant={VariantButton.ICON_BUTTON}
          size={ButtonSize.L}
          aria-label={t("Кнопка выйти из личного кабинета")}
          onClick={onLogout}
        >
          <LogoutIcon />
        </Button>
      </div>
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
