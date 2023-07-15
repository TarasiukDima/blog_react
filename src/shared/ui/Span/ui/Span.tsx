import { ReactNode, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import css from "./Span.module.scss";

interface ISpanProps {
  className?: string;
  variant?: "block" | "inline";
  children?: ReactNode;
}

export const Span = memo(
  ({ className, children, variant = "inline" }: ISpanProps) => (
    <span className={classNames(css[variant], {}, [className])}>
      {children}
    </span>
  )
);
