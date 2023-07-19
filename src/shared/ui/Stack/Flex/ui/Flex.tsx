import { ReactNode, memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
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
  gap?: "6" | "10" | "15";
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

const gapToClass = {
  6: "small_gap",
  10: "middle_gap",
  15: "big_gap",
  undefined: "",
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
    gap,
  }: IFlexProps) => {
    const flexOptionsClasses = {
      [css.wrap]: wrap === "wrap",
      [css.allWidth]: allWidth,
    };

    if (gap) {
      flexOptionsClasses[css[gapToClass[gap]]] = true;
    }

    return (
      <Tag
        className={classNames(css.Flex, flexOptionsClasses, [
          className,
          css[direction],
          css[alignToClass[align]],
          css[justifyToClass[justify]],
        ])}
      >
        {children}
      </Tag>
    );
  }
);
