import { CSSProperties, FC, memo, useMemo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import css from "./Avatar.module.scss";

interface IAvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

const Avatar: FC<IAvatarProps> = memo(
  ({ className = "", src = "", alt = "", size = 50 }: IAvatarProps) => {
    const styles = useMemo<CSSProperties>(
      () => ({
        width: size,
        height: size,
      }),
      [size]
    );

    return (
      <img
        className={classNames(css.Avatar_img, {}, [className])}
        src={src}
        alt={alt}
        style={styles}
      />
    );
  }
);

export { Avatar };
