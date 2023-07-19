import { CSSProperties, FC, memo, useMemo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import DefaultImg from "@/shared/assets/images/placeholder.png";
import css from "./Avatar.module.scss";

interface IAvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
  position?: "center" | "left" | "right" | "none";
}

const Avatar: FC<IAvatarProps> = memo(
  ({
    className = "",
    src,
    alt = "",
    size = 50,
    position = "center",
  }: IAvatarProps) => {
    const styles = useMemo<CSSProperties>(
      () => ({
        width: size,
        height: size,
      }),
      [size]
    );

    return (
      <img
        className={classNames(css.Avatar_img, {}, [className, css[position]])}
        src={src || DefaultImg}
        alt={alt}
        style={styles}
      />
    );
  }
);

export { Avatar };
