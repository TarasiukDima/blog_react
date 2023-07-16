import { FC, memo, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { LoginModal } from "features/AuthByUsername";
import { Button } from "shared/ui/Button";
import { VariantButton } from "shared/ui/Button/ui/Button";
import { AvatarDropdown } from "features/avatarDropdown";
import { NotificationButton } from "features/notificationButton";
import { ButtonSize } from "shared/const/common";
import { HStack } from "shared/ui/Stack";
import LoginIcon from "shared/assets/icons/login.svg";
import {
  getUserAuthData,
} from "../../../entities/User";

const LogIn: FC = memo(() => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const authData = useSelector(getUserAuthData);

  const onShowModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  if (authData) {
    return (
      <HStack align="center" gap="15">
        <NotificationButton />
        <AvatarDropdown />
      </HStack>
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
