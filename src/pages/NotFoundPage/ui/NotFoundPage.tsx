import { useTranslation } from "react-i18next";
import { Section } from "shared/ui/Section";
import { Title } from "shared/ui/Title";
import css from "./NotFoundPage.module.scss";

const NotFoundPage = () => {
  const { t } = useTranslation("error");

  return (
    <Section className={css.NotFoundPage}>
      <p className={css.NotFoundPage__code}>404</p>
      <Title Tag="h1" className={css.NotFoundPage__errorTitle}>
        {t("Данная страница не найдена!")}
      </Title>
    </Section>
  );
};

export default NotFoundPage;
