import { ReactNode, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import css from "./Span.module.scss";

export enum SpanVariants {
  BLOCK = "block",
  INLINE = "inline",
}
interface ISpanProps {
  className?: string;
  variant?: SpanVariants;
  children?: ReactNode;
}

export const Span = memo(
  ({ className, children, variant = SpanVariants.INLINE }: ISpanProps) => (
    <span className={classNames(css[variant], {}, [className])}>
      {children}
    </span>
  )
);
