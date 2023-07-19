import { CSSProperties, ReactNode, memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import css from "./Paragraph.module.scss";

interface IParagraphProps {
  className?: string;
  children?: ReactNode;
}

export const Paragraph = memo(({ className, children }: IParagraphProps) => (
  <p className={classNames(css.Paragraph, {}, [className])}>{children}</p>
));
