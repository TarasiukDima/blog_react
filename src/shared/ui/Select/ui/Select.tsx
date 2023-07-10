import React, { SelectHTMLAttributes, memo, useMemo, useRef } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import css from "./Select.module.scss";

type THTMLSelectProps = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "value" | "onChange" | "readonly" | "disabled"
>;

export interface SelectOptions<T extends string> {
  value: T;
  content: string;
}

interface ISelectProps<T extends string> extends THTMLSelectProps {
  className?: string;
  placeholder?: string;
  value?: T;
  options?: Array<SelectOptions<T>>;
  disabled?: boolean;
  onChange?: (value: T) => void;
}

export const Select = <T extends string>(props: ISelectProps<T>) => {
  const {
    className,
    options,
    value,
    onChange,
    placeholder = "",
    disabled = false,
    ...otherProps
  } = props;
  const ref = useRef<HTMLSelectElement>(null);

  const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event.target.value as T);
  };

  const listOptions = useMemo(
    () => (options as Array<SelectOptions<T>>)?.map(({ content, value }) => (
      <option className={css.option} key={value} value={value}>
        {content}
      </option>
    )),
    [options]
  );

  return (
    <label
      className={classNames(
        css.SelectWrapper,
        {
          [css.readonly]: disabled,
        },
        [className]
      )}
    >
      {placeholder && <span className={css.placeholder}>{placeholder}</span>}

      <select
        ref={ref}
        value={value}
        onChange={onChangeHandler}
        disabled={disabled}
        className={css.Select}
        {...otherProps}
      >
        {listOptions}
      </select>
    </label>
  );
};
