module.exports = (componentName) => `import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import css from "./${componentName}.module.scss";

interface I${componentName}Props {
  className?: string;
}

export const ${componentName} = memo(({ className }: I${componentName}Props) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(css.${componentName}, {}, [className])}>{t("")}</div>
  );
});
`;
