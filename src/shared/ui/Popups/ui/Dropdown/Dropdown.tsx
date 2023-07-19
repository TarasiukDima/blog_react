import { Fragment, ReactNode } from "react";
import { Menu } from "@headlessui/react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppLink } from "@/shared/ui/AppLink";
import { Button, VariantButton } from "@/shared/ui/Button";
import { DropdownDirection } from "@/shared/types/ui";
import { directionToClass } from "../../styles/consts";
import css from "./Dropdown.module.scss";
import popupCss from "../../styles/popup.module.scss";

export interface IDropdownItem {
  id: number;
  content: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
  ariaLabel?: string;
}

interface IDropdownProps {
  className?: string;
  trigger: ReactNode;
  readonly?: boolean;
  roundedTrigger?: boolean;
  items: Array<IDropdownItem>;
  direction?: DropdownDirection;
  open?: boolean;
}

export const Dropdown = ({
  className,
  trigger,
  readonly = false,
  roundedTrigger = false,
  open = false,
  items,
  direction = "bottom left",
}: IDropdownProps) => {
  return (
    <Menu
      as="div"
      __demoMode={open}
      className={classNames(
        "",
        {
          [css.smallWidth]: roundedTrigger,
        },
        [className, popupCss.popup]
      )}
    >
      <Menu.Button
        disabled={readonly}
        className={classNames(
          css.Dropdown__trigger,
          {
            [css.rounded]: roundedTrigger,
            [popupCss.disabled]: readonly,
          },
          [popupCss.trigger]
        )}
      >
        {trigger}
      </Menu.Button>

      <Menu.Items
        as="ul"
        className={classNames(
          css.Dropdown__list,
          {
            [css.disabled]: readonly,
          },
          [directionToClass[direction], popupCss.options]
        )}
      >
        {items.map(({ content, id, disabled, href, onClick, ariaLabel }) => (
          <Menu.Item as={Fragment} key={id} disabled={disabled}>
            {({ active, disabled }) => {
              const buttonClassNameStr = classNames(
                css.Dropdown__list_link,
                {
                  [css.active]: active,
                  [popupCss.disabled]: disabled,
                },
                [popupCss.item]
              );

              return (
                <li className={css.Dropdown__list_item}>
                  {href ? (
                    <AppLink
                      className={buttonClassNameStr}
                      to={href}
                      aria-disabled={disabled}
                      aria-label={ariaLabel}
                    >
                      {content}
                    </AppLink>
                  ) : (
                    <Button
                      className={buttonClassNameStr}
                      variant={VariantButton.CLEAR}
                      onClick={onClick}
                      disabled={disabled}
                      aria-label={ariaLabel}
                    >
                      {content}
                    </Button>
                  )}
                </li>
              );
            }}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};
