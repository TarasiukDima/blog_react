import {
  FC,
  KeyboardEvent,
  MouseEvent,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Portal } from "shared/ui/Portal/ui/Portal";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { Button, VariantButton } from "shared/ui/Button";
import { Theme } from "shared/types";
import css from "./Modal.module.scss";

interface IModalProps {
  className?: string;
  children?: ReactNode;
  isOpen: boolean;
  closeModalHandler: () => void;
  lazy?: boolean;
}

const ANIMATION_DELAY = 250;

const Modal: FC<IModalProps> = ({
  className,
  children,
  isOpen = true,
  closeModalHandler,
  lazy,
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const { theme } = useTheme();

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const closeHandler = useCallback(() => {
    if (closeModalHandler) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        closeModalHandler();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [closeModalHandler]);

  const onKeyDownHandler = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Escape") {
        closeHandler();
      }
    },
    [closeHandler]
  );

  // useEffect(() => {
  //   if (isOpen) {
  //     window.addEventListener("keydown", onKeyDownHandler);
  //   }

  //   return () => {
  //     clearTimeout(timerRef.current);
  //     window.removeEventListener("keydown", onKeyDownHandler);
  //   };
  // }, [isOpen, onKeyDownHandler]);

  const mods: Record<string, boolean> = {
    [css.opened]: isOpen,
    [css.dark]: theme === Theme.DARK,
    [css.isClosing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  const onContentClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <Portal>
      <div
        className={classNames(css.Modal, mods, [className])}
        onClick={closeHandler}
        onKeyDown={onKeyDownHandler}
      >
        <div className={css.Modal_wrap} onClick={onContentClick}>
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