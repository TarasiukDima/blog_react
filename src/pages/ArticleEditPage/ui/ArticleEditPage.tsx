import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { Section } from "shared/ui/Section";
import { Title } from "shared/ui/Title";
import css from "./ArticleEditPage.module.scss";

interface IArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = memo(({ className }: IArticleEditPageProps) => {
  const { t } = useTranslation("articleEdit");
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);

  return (
    <Section className={css.ArticleEditPage}>
      <Title Tag="h1">
        {isEdit ?
          `${t("Редактирование статьи!")} ID - ${id}` :
          t("Создание новой статьи!")}
      </Title>
    </Section>
  );
});

export default ArticleEditPage;
