import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import css from "./Text.module.scss";

interface ITextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: "primary" | "error";
  "data-testid"?: string;
}

export const Text = memo(
  ({
    className,
    text,
    title,
    theme = "primary",
    "data-testid": dataTestId = "",
  }: ITextProps) => (
    <div className={classNames(css.Text, {}, [className, css[theme]])}>
      {title && (
        <p className={css.title} data-testid={`${dataTestId}.Header`}>
          {title}
        </p>
      )}
      {text && (
        <p className={css.text} data-testid={`${dataTestId}.Text`}>
          {text}
        </p>
      )}
    </div>
  )
);
