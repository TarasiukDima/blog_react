import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button";
import { VariantButton } from "shared/ui/Button/ui/Button";
import css from "./LangSwitcher.module.scss";

interface ILangSwitcherProps {
  className?: string;
}

const LangSwitcher: FC<ILangSwitcherProps> = memo(
  ({ className = "" }: ILangSwitcherProps) => {
    const { i18n } = useTranslation();

    if (!(i18n?.options?.fallbackLng as Array<string>)?.length) return null;

    const changeLanguage = (slug: string) => {
      if (slug !== i18n.language) {
        i18n.changeLanguage(slug);
      }
    };

    return (
      <ul className={css.LangSwitcher}>
        {(i18n.options.fallbackLng as Array<string>).map((language) => (
          <li key={language}>
            <Button
              className={classNames(
                css.LangSwitcher_button,
                { [css.active]: i18n.language === language },
                [className]
              )}
              variant={VariantButton.CLEAR}
              onClick={() => changeLanguage(language)}
            >
              {language}
            </Button>
          </li>
        ))}
      </ul>
    );
  }
);

export { LangSwitcher };
