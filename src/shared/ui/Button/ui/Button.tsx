import { FC, ButtonHTMLAttributes } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import css from "./Button.module.scss";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<IButtonProps> = ({
  className, children, ...others
}) => (
  <button className={classNames(css.Button, {}, [className])} {...others}>
    {children}
  </button>
);

export { Button };
