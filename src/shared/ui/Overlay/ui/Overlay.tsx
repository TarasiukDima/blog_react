import { KeyboardEvent, memo, useCallback } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import css from "./Overlay.module.scss";

interface OverlayProps {
  className?: string;
  onClick?: () => void;
  isBlackBg?: boolean;
}

export const Overlay = memo(
  ({ className, onClick, isBlackBg = true }: OverlayProps) => {
    const onKeyDownHandler = useCallback(
      (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "Escape") {
          onClick?.();
        }
      },
      [onClick]
    );

    return (
      <div
        onClick={onClick}
        onKeyDown={onKeyDownHandler}
        className={classNames(
          css.Overlay,
          {
            [css.blackBg]: isBlackBg,
          },
          [className]
        )}
      />
    );
  }
);
