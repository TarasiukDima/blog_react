import { FC, ButtonHTMLAttributes } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { ButtonSize } from "shared/types";
import css from "./Button.module.scss";

export enum VariantButton {
  CLEAR = "clear",
  STANDARD = "standard",
  ROUNDED = "rounded",
  ICON_BUTTON = "icon_button",
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  variant?: VariantButton;
}

const Button: FC<IButtonProps> = ({
  className,
  children,
  disabled,
  size = ButtonSize.L,
  variant = VariantButton.STANDARD,
  ...others
}) => (
  <button
    className={classNames(css.Button, { [css.disabled]: disabled }, [
      className,
      css[size],
      css[variant],
    ])}
    disabled={disabled}
    {...others}
  >
    {children}
  </button>
);

export { Button };
