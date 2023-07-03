import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, VariantButton } from "shared/ui/Button";
import { Icon } from "shared/ui/Icon";
import CopyIcon from "./copy.svg";
import css from "./Code.module.scss";

interface IButtonProps {
  text: string;
  className?: string;
}
const Code = memo(({ className, text }: IButtonProps) => {
  const { t } = useTranslation();

  const onClickHandler = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <div className={css.Code}>
      <Button
        className={css.Code_copyBtn}
        onClick={onClickHandler}
        variant={VariantButton.ICON_BUTTON}
        title={t("Копировать")}
      >
        <Icon Svg={CopyIcon} />
      </Button>
      <pre className={classNames(css.Code__pre, {}, [className])}>
        <code>{text}</code>
      </pre>
    </div>
  );
});

export { Code };
