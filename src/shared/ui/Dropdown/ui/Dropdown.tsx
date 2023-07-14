import { Fragment, ReactNode } from "react";
import { Menu } from "@headlessui/react";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui/AppLink";
import { Button, VariantButton } from "shared/ui/Button";
import { DropdownDirection } from "shared/types/ui";
import css from "./Dropdown.module.scss";

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

const directionToClass = {
  "top left": css.topLeft,
  "top right": css.topRight,
  "bottom left": css.bottomLeft,
  "bottom right": css.bottomRight,
};

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
        css.Dropdown,
        {
          [css.smallWidth]: roundedTrigger,
        },
        [className]
      )}
    >
      <Menu.Button
        disabled={readonly}
        className={classNames(
          css.Dropdown__trigger,
          {
            [css.disabled]: readonly,
            [css.rounded]: roundedTrigger,
          },
          []
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
          [directionToClass[direction]]
        )}
      >
        {items.map(({ content, id, disabled, href, onClick, ariaLabel }) => (
          <Menu.Item as={Fragment} key={id} disabled={disabled}>
            {({ active, disabled }) => {
              const buttonClassNameStr = classNames(
                css.Dropdown__list_link,
                {
                  [css.active]: active,
                  [css.disabled]: disabled,
                },
                []
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
