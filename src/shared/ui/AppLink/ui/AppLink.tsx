import { FC, ReactNode, memo } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ButtonSize } from "@/shared/const/common";
import css from "./AppLink.module.scss";

export enum VariantLink {
  CLEAR = "clear",
  TEXT_LINK = "text_link",
  BUTTON_LINK = "button_link",
  ICON_LINK = "icon_link",
}

export interface IAppLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
  variant?: VariantLink;
  size?: ButtonSize;
}

const AppLink: FC<IAppLinkProps> = memo(
  ({
    className,
    to,
    children,
    variant = VariantLink.CLEAR,
    size = ButtonSize.S,
    ...othersProps
  }: IAppLinkProps) => (
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
  )
);

export { AppLink };
