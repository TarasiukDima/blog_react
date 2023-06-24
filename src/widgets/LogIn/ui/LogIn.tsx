import { FC, useCallback, useState } from "react";
import { ButtonSize } from "shared/types";
import { Button } from "shared/ui/Button";
import { VariantButton } from "shared/ui/Button/ui/Button";
import { useTranslation } from "react-i18next";
import { Modal } from "shared/ui/Modal";
import LoginIcon from "../assets/login.svg";
import css from "./LogIn.module.scss";

interface ILogInProps {}
const LogIn: FC<ILogInProps> = ({}) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <>
      <Button
        variant={VariantButton.ICON_BUTTON}
        size={ButtonSize.L}
        aria-label={t("Кнопка войти в личный кабинет")}
        onClick={onToggleModal}
      >
        <LoginIcon />
      </Button>

      {isOpen && (
        <Modal isOpen={isOpen} closeModalHandler={onToggleModal}>
          This text for modal
        </Modal>
      )}
    </>
  );
};

export { LogIn };
