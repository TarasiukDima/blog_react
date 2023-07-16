import { FC, ReactNode } from "react";
import { Popover as HPopover } from "@headlessui/react";
import { classNames } from "shared/lib/classNames/classNames";
import { DropdownDirection } from "shared/types/ui";
import { directionToClass } from "../../styles/consts";
import css from "./Popover.module.scss";
import popupCss from "../../styles/popup.module.scss";

interface IPopoverProps {
  className?: string;
  readonly?: boolean;
  trigger: ReactNode;
  isTriggerIcon?: boolean;
  children: ReactNode;
  direction?: DropdownDirection;
}

export const Popover: FC<IPopoverProps> = ({
  className,
  trigger,
  isTriggerIcon = false,
  children,
  readonly = false,
  direction = "bottom left",
}) => {
  return (
    <HPopover
      className={classNames(css.Popover, {}, [className, popupCss.popup])}
    >
      <HPopover.Button
        className={classNames(
          css.Popover__trigger,
          {
            [popupCss.disabled]: readonly,
            [css.triggerLikeIcon]: isTriggerIcon,
            [css.triggerLikeButton]: !isTriggerIcon,
          },
          [popupCss.trigger]
        )}
      >
        {trigger}
      </HPopover.Button>

      <HPopover.Panel
        className={classNames(
          css.Popover__panel,
          { [css.disabled]: readonly },
          [directionToClass[direction], popupCss.options]
        )}
      >
        {children}
      </HPopover.Panel>
    </HPopover>
  );
};
