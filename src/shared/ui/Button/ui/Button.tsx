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
  size = ButtonSize.L,
  variant = VariantButton.STANDARD,
  ...others
}) => (
  <button
    className={classNames(css.Button, {}, [className, css[size], css[variant]])}
    {...others}
  >
    {children}
  </button>
);

export { Button };
