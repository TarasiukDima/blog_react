import { ReactNode, memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import css from "./Card.module.scss";

interface ICardProps {
  className?: string;
  children: ReactNode;
  Tag?: keyof JSX.IntrinsicElements;
}

export const Card = memo(({ className, children, Tag = "div" }: ICardProps) => {
  return (
    <Tag className={classNames(css.Card, {}, [className])}>{children}</Tag>
  );
});
