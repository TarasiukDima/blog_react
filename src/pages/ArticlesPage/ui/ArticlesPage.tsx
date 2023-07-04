import { memo } from "react";
import { useTranslation } from "react-i18next";
import { ArticleList, ArticleView } from "entities/Article";
import { Section } from "shared/ui/Section";
import { Title } from "shared/ui/Title";

const ArticlesPage = () => {
  const { t } = useTranslation("articles");

  return (
    <Section>
      <Title Tag="h1">{t("Статьи")}</Title>

      <ArticleList articles={[]} view={ArticleView.LIST} isLoading />
    </Section>
  );
};

export default memo(ArticlesPage);
