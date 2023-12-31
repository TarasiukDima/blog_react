import { FC, ButtonHTMLAttributes, memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ButtonSize } from "@/shared/const/common";
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

const Button: FC<IButtonProps> = memo(
  ({
    className,
    children,
    disabled = false,
    size = ButtonSize.L,
    variant = VariantButton.STANDARD,
    ...others
  }: IButtonProps) => (
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
  )
);

export { Button };
