import { ReactNode, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import css from "./Flex.module.scss";

export interface IFlexProps {
  className?: string;
  children?: ReactNode;
  wrap?: "wrap" | "nowrap";
  direction?: "row" | "column";
  align?: "start" | "stretch" | "center" | "end";
  justify?: "start" | "center" | "end" | "between" | "around";
  Tag?: keyof JSX.IntrinsicElements;
  allWidth?: boolean;
}

const alignToClass = {
  start: "aStart",
  stretch: "aStretch",
  center: "aCenter",
  end: "aEnd",
};

const justifyToClass = {
  start: "jStart",
  center: "jCenter",
  end: "jEnd",
  between: "jBetween",
  around: "jAround",
};

export const Flex = memo(
  ({
    className,
    children,
    Tag = "div",
    direction = "row",
    align = "stretch",
    justify = "start",
    wrap = "nowrap",
    allWidth = false,
  }: IFlexProps) => {
    return (
      <Tag
        className={classNames(
          css.Flex,
          {
            [css.wrap]: wrap === "wrap",
            [css.allWidth]: allWidth,
          },
          [
            className,
            css[direction],
            css[alignToClass[align]],
            css[justifyToClass[justify]],
          ]
        )}
      >
        {children}
      </Tag>
    );
  }
);
