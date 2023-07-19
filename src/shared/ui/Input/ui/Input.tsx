import React, { InputHTMLAttributes, memo, useEffect, useRef } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import css from "./Input.module.scss";

type THTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange" | "readonly" | "disabled"
>;

interface IInputProps extends THTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  readonly?: boolean;
  disabled?: boolean;
}

export const Input = memo((props: IInputProps) => {
  const {
    className,
    value = "",
    onChange,
    type = "text",
    placeholder = "",
    autofocus,
    readonly = false,
    disabled = false,
    ...otherProps
  } = props;
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autofocus) {
      ref.current?.focus();
    }
  }, [autofocus]);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <label
      className={classNames(
        css.InputWrapper,
        {
          [css.submit]: type === "submit",
          [css.readonly]: readonly,
        },
        [className]
      )}
    >
      {placeholder && <span className={css.placeholder}>{placeholder}</span>}

      <input
        ref={ref}
        type={type}
        value={value}
        onChange={onChangeHandler}
        readOnly={readonly}
        disabled={disabled || readonly}
        className={css.input}
        placeholder={placeholder}
        {...otherProps}
      />
    </label>
  );
});
