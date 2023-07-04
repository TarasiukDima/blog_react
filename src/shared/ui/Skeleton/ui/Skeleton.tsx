import { CSSProperties, FC, ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import css from "./Skeleton.module.scss";

interface ISkeletonProps {
  type: "circle" | "square";
  className?: string;
  width?: string | number;
  height?: string | number;
  place?: "center" | "left" | "right";
  noMargin?: boolean;
}

const Skeleton: FC<ISkeletonProps> = ({
  type,
  className,
  width = "100%",
  height = "100px",
  place = "left",
  noMargin = false,
}) => {
  const styles: CSSProperties = {
    width,
    height,
  };

  return (
    <div
      className={classNames(css.Skeleton, {
        [css.noneMargin]: noMargin,
      }, [
        className,
        css[type],
        css[place],
      ])}
      style={styles}
    />
  );
};

export { Skeleton };
