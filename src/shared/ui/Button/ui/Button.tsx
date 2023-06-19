import { FC, ButtonHTMLAttributes } from "react";
import { classNames } from "shared/lib/classNames";
import css from "./Button.module.scss";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<IButtonProps> = ({ className, children, ...others }) => {
  return (
    <button className={classNames(css.Button, {}, [className])} {...others}>
      {children}
    </button>
  );
};

export default Button;