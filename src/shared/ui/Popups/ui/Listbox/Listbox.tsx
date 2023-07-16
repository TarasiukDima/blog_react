import { Fragment, ReactNode } from "react";
import { Listbox as HListbox } from "@headlessui/react";
import { classNames } from "shared/lib/classNames/classNames";
import { HStack } from "shared/ui/Stack";
import { Paragraph } from "shared/ui/Paragraph";
import { DropdownDirection } from "shared/types/ui";
import { directionToClass } from "../../styles/consts";
import css from "./Listbox.module.scss";
import popupCss from "../../styles/popup.module.scss";

export interface IListBoxItem {
  id: number;
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

interface IListBoxProps {
  className?: string;
  readonly?: boolean;
  items: Array<IListBoxItem>;
  value: string;
  direction?: DropdownDirection;
  defaultValue?: string;
  label?: string;
  onChange: (value: string) => void;
}

export const Listbox = ({
  className,
  readonly = false,
  items,
  value,
  defaultValue,
  onChange,
  label,
  direction = "bottom left",
}: IListBoxProps) => {
  return (
    <HStack
      className={classNames(css.ListboxWrapper, {}, [className])}
      align="end"
      justify="start"
    >
      {label && (
        <Paragraph
          className={classNames(
            css.Label,
            {
              [css.readonly]: readonly,
            },
            []
          )}
        >
          {label}
        </Paragraph>
      )}

      <HListbox
        as="div"
        className={classNames(
          css.Listbox,
          {
            [css.withLabel]: label,
            [css.withoutLabel]: !label,
          },
          [popupCss.popup]
        )}
        value={value}
        onChange={onChange}
        disabled={readonly}
      >
        <HListbox.Button
          className={classNames(
            css.ListBox__trigger,
            {
              [popupCss.disabled]: readonly,
            },
            [popupCss.trigger]
          )}
        >
          {value || defaultValue}
        </HListbox.Button>
        <HListbox.Options
          className={classNames(css.ListBox__options, {}, [
            popupCss.options,
            directionToClass[direction],
          ])}
          as="ul"
        >
          {items.map((item) => (
            <HListbox.Option
              key={item.id}
              value={item.value}
              disabled={readonly || item.disabled}
              as={Fragment}
            >
              {({ selected, active, disabled }) => (
                <li
                  className={classNames(
                    css.ListBox__options_item,
                    {
                      [css.active]: active,
                      [css.selected]: selected,
                      [popupCss.disabled]: disabled,
                    },
                    [popupCss.item]
                  )}
                >
                  {item.content}
                </li>
              )}
            </HListbox.Option>
          ))}
        </HListbox.Options>
      </HListbox>
    </HStack>
  );
};
