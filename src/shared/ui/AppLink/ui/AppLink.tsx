import { FC, ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";
import css from "./AppLink.module.scss";
import { classNames } from "shared/lib/classNames";

export interface IAppLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
}

const AppLink: FC<IAppLinkProps> = ({
  className,
  to,
  children,
  ...othersProps
}) => {
  return (
    <Link className={classNames(className, {}, [css.AppLink])} to={to} {...othersProps}>
      {children}
    </Link>
  );
};

export default AppLink;
