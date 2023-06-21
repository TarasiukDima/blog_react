import { FC, ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import css from "./AppLink.module.scss";

export interface IAppLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
}

const AppLink: FC<IAppLinkProps> = ({
  className,
  to,
  children,
  ...othersProps
}) => (
  <Link
    className={classNames(className, {}, [css.AppLink])}
    to={to}
    {...othersProps}
  >
    {children}
  </Link>
);

export { AppLink };
