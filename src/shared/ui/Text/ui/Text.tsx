import { classNames } from "shared/lib/classNames/classNames";
import css from "./Text.module.scss";

export enum TextTheme {
  PRIMARY = "primary",
  ERROR = "error",
}

interface ITextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export const Text = ({
  className,
  text,
  title,
  theme = TextTheme.PRIMARY,
}: ITextProps) => (
  <div className={classNames(css.Text, {}, [className, css[theme]])}>
    {title && <p className={css.title}>{title}</p>}
    {text && <p className={css.text}>{text}</p>}
  </div>
);
