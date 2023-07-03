import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Section } from "shared/ui/Section";

const ArticlesPage = () => {
  const { t } = useTranslation("articles");

  return <Section>{t("Статьи")}</Section>;
};

export default memo(ArticlesPage);
