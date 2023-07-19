import { FC, ReactNode } from "react";
import { Portal } from "@/shared/ui/Portal/ui/Portal";
import {
  TClassesOptionsObject,
  classNames,
} from "@/shared/lib/classNames/classNames";
import { useTheme } from "@/app/providers/ThemeProvider";
import { Button, VariantButton } from "@/shared/ui/Button";
import { Theme } from "@/shared/const/common";
import { Overlay } from "@/shared/ui/Overlay";
import { useModal } from "@/shared/lib/hooks/useModal/useModal";
import css from "./Modal.module.scss";

interface IModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  closeModalHandler: () => void;
  lazy?: boolean;
}

const Modal: FC<IModalProps> = ({
  className,
  children,
  isOpen = false,
  closeModalHandler,
  lazy,
}) => {
  const { isClosing, isMounted, closeHandler } = useModal({
    onClose: closeModalHandler,
    isOpen,
  });
  const { theme } = useTheme();

  const optionalsClasses: TClassesOptionsObject = {
    [css.opened]: isOpen,
    [css.dark]: theme === Theme.DARK,
    [css.isClosing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(css.Modal, optionalsClasses, [className])}>
        <Overlay onClick={closeHandler} />

        <div className={css.Modal_wrap}>
          <Button
            variant={VariantButton.CLEAR}
            className={css.close_modal}
            onClick={closeHandler}
          >
            &times;
          </Button>

          {children}
        </div>
      </div>
    </Portal>
  );
};

export { Modal };
