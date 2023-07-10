import {
  MutableRefObject,
  ReactNode,
  memo,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useThrottle } from "shared/lib/hooks/useThrottle/useThrottle";
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";
import { getScrollByPath, scrollActions } from "features/scrollSave";
import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "shared/lib/hooks/userAppDIspatch/userAppDIspatch";
import { IStateSchema } from "app/providers/StoreProvider";
import css from "./Section.module.scss";

interface ISectionProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

const Section = memo(({ className, children, onScrollEnd }: ISectionProps) => {
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const location = useLocation();
  const scrollPosition = useSelector((state: IStateSchema) => getScrollByPath(state, location.pathname));

  useInfiniteScroll({
    cb: onScrollEnd,
    wrapperRef: null,
    triggerRef,
  });

  useLayoutEffect(() => {
    window.scrollTo({
      top: scrollPosition,
    });
  });

  const handleScroll = useThrottle((event: Event) => {
    dispatch(
      scrollActions.setScrollPosition({
        path: location.pathname,
        position: window.scrollY || 0,
      })
    );
  }, 300);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, dispatch, location.pathname]);

  return (
    <section className={classNames(css.Section, {}, [className])}>
      {children}
      {onScrollEnd ? <div ref={triggerRef} className={css.trigger} /> : null}
    </section>
  );
});

export { Section };
