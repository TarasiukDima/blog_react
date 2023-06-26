import { FC, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { LoginModal } from "features/AuthByUsername";
import { Button } from "shared/ui/Button";
import { ButtonSize } from "shared/types";
import { VariantButton } from "shared/ui/Button/ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, userActions } from "../../../entities/User";
import LoginIcon from "../assets/login.svg";
import LogoutIcon from "../assets/logout.svg";

const LogIn: FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

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
      <Button
        variant={VariantButton.ICON_BUTTON}
        size={ButtonSize.L}
        aria-label={t("Кнопка выйти из личного кабинета")}
        onClick={onLogout}
      >
        <LogoutIcon />
      </Button>
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

      {isOpen && <LoginModal isOpen={isOpen} onClose={onCloseModal} />}
    </>
  );
};

export { LogIn };
