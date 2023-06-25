import { FC, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { LoginModal } from "features/AuthByUsername";
import { Button } from "shared/ui/Button";
import { ButtonSize } from "shared/types";
import { VariantButton } from "shared/ui/Button/ui/Button";
import LoginIcon from "../assets/login.svg";

interface ILogInProps {}
const LogIn: FC<ILogInProps> = ({}) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const onShowModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsOpen(false);
  }, []);

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
