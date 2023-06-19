import { FC } from "react";
import { classNames } from "shared/lib/classNames";
import css from "./Section.module.scss";

interface ISectionProps {
  className?: string;
}

const Section: FC<ISectionProps> = ({ className, children }) => {
  return (
    <section className={classNames(css.Section, {}, [className])}>
      {children}
    </section>
  );
};

export default Section;
