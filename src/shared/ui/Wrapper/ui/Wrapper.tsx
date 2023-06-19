import { FC, ReactNode } from "react";
import { classNames } from "shared/lib/classNames";
import css from "./Wrapper.module.scss";

interface IWrapperProps {
  className?: string;
  children: ReactNode;
}

const Wrapper: FC<IWrapperProps> = ({ className, children }) => {
  return <div className={classNames(css.Wrapper, {}, [className])}>{children}</div>;
};

export default Wrapper;
