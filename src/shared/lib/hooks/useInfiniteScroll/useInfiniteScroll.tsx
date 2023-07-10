import { MutableRefObject, useEffect, useRef } from "react";

export interface IUseInfiniteScrollProps {
  cb?: () => void;
  triggerRef: MutableRefObject<HTMLElement>;
  wrapperRef?: MutableRefObject<HTMLElement> | null;
}
export const useInfiniteScroll = ({
  cb = () => {},
  triggerRef,
  wrapperRef = null,
}: IUseInfiniteScrollProps) => {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const wrapperElement = wrapperRef ? wrapperRef.current : null;
    const triggerElement = triggerRef.current;

    const options = {
      root: wrapperElement,
      rootMargin: "0px",
      threshold: 1.0,
    };

    observer.current = new IntersectionObserver(({ 0: entry }) => {
      if (entry.isIntersecting) {
        cb();
      }
    }, options);

    observer.current.observe(triggerElement);

    return () => {
      if (observer.current && triggerElement) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.current.unobserve(triggerElement);
      }
    };
  }, [cb, triggerRef, wrapperRef]);
};
