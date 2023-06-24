import { FC, ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { ButtonSize } from "shared/types";
import css from "./AppLink.module.scss";

export enum VariantLink {
  CLEAR = "clear",
  TEXT_LINK = "text_link",
  BUTTON_LINK = "button_link",
}

export interface IAppLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
  variant?: VariantLink;
  size?: ButtonSize;
}

const AppLink: FC<IAppLinkProps> = ({
  className,
  to,
  children,
  variant = VariantLink.CLEAR,
  size = ButtonSize.S,
  ...othersProps
}) => (
  <Link
    className={classNames(css.AppLink, {}, [
      className,
      css[variant],
      css[size],
    ])}
    to={to}
    {...othersProps}
  >
    {children}
  </Link>
);

export { AppLink };
