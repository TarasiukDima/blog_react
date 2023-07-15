import { Fragment, ReactNode } from "react";
import { Listbox as HListbox } from "@headlessui/react";
import { classNames } from "shared/lib/classNames/classNames";
import { VStack } from "shared/ui/Stack";
import { Paragraph } from "shared/ui/Paragraph";
import { DropdownDirection } from "shared/types/ui";
import css from "./Listbox.module.scss";

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

const directionToClass = {
  "top left": css.topLeft,
  "top right": css.topRight,
  "bottom left": css.bottomLeft,
  "bottom right": css.bottomRight,
};

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
    <VStack
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
          []
        )}
        value={value}
        onChange={onChange}
        disabled={readonly}
      >
        <HListbox.Button
          className={classNames(
            css.ListBox__trigger,
            {
              [css.disabled]: readonly,
            },
            []
          )}
        >
          {value || defaultValue}
        </HListbox.Button>
        <HListbox.Options
          className={classNames(css.ListBox__options, {}, [
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
                      [css.disabled]: disabled,
                      [css.selected]: selected,
                    },
                    []
                  )}
                >
                  {item.content}
                </li>
              )}
            </HListbox.Option>
          ))}
        </HListbox.Options>
      </HListbox>
    </VStack>
  );
};
