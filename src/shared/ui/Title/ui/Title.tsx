import { FC, ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import css from "./Title.module.scss";

interface ITitleProps {
  className?: string;
  Tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: ReactNode;
}

const Title: FC<ITitleProps> = ({ Tag = "h1", className, children }) => (
  <Tag className={classNames(css.Title, {}, [className, css[Tag]])}>{children}</Tag>
);

export { Title };
