import React, { SelectHTMLAttributes, memo, useMemo, useRef } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import css from "./Select.module.scss";

type THTMLSelectProps = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "value" | "onChange" | "readonly" | "disabled"
>;

interface SelectOptions {
  value: string;
  content: string;
}

interface ISelectProps extends THTMLSelectProps {
  className?: string;
  placeholder?: string;
  value?: string;
  options?: Array<SelectOptions>;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

export const Select = memo((props: ISelectProps) => {
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
    onChange?.(event.target.value);
  };

  const listOptions = useMemo(
    () => options?.map(({ content, value }) => (
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
});
