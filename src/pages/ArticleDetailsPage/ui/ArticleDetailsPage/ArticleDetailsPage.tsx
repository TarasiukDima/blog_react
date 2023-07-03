import { memo } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Section } from "shared/ui/Section";
import { Title } from "shared/ui/Title";
import { ArticleDetails } from "../../../../entities/Article";

const ArticleDetailsPage = () => {
  const { t } = useTranslation("articles");
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return (
      <Section>
        <Title Tag="h1">{t("Статья не найдена")}</Title>
      </Section>
    );
  }

  return (
    <Section>
      <ArticleDetails id={id} />
    </Section>
  );
};

export default memo(ArticleDetailsPage);
