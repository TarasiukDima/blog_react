import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import css from "./Section.module.scss";

interface ISectionProps {
  className?: string;
}

const Section: FC<ISectionProps> = ({ className, children }) => (
  <section className={classNames(css.Section, {}, [className])}>
    {children}
  </section>
);

export { Section };
