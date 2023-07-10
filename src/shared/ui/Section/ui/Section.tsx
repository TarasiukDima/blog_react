import { MutableRefObject, ReactNode, memo, useRef } from "react";
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";
import { classNames } from "shared/lib/classNames/classNames";
import css from "./Section.module.scss";

interface ISectionProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

const Section = memo(
  ({ className, children, onScrollEnd = () => {} }: ISectionProps) => {
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
      cb: () => onScrollEnd(),
      wrapperRef: null,
      triggerRef,
    });

    return (
      <section className={classNames(css.Section, {}, [className])}>
        {children}
        <div ref={triggerRef} className={css.trigger} />
      </section>
    );
  }
);

export { Section };
