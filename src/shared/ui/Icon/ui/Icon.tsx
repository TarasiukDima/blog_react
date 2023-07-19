import React, { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import css from "./Icon.module.scss";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  Svg: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = memo(({ className, Svg, ...otherProps }: IconProps) => {
  return (
    <Svg className={classNames(css.Icon, {}, [className])} {...otherProps} />
  );
});
