import { FC } from "react";
import { classNames } from "shared/lib/classNames";
import { Theme } from "shared/types/common";
import Button from "shared/ui/Button";
import { useTranslation } from "react-i18next";
import css from "./LangSwitcher.module.scss";

interface ILangSwitcherProps {
  className?: string;
  theme: Theme;
}

const LangSwitcher: FC<ILangSwitcherProps> = ({ className = "", theme }) => {
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
              {
                [css.active]: i18n.language === language,
                [css.dark]: theme === Theme.DARK,
              },
              [className]
            )}
            onClick={() => changeLanguage(language)}
          >
            {language}
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default LangSwitcher;
