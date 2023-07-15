import { useTranslation } from "react-i18next";
import { Section } from "shared/ui/Section";
import { Title } from "shared/ui/Title";

const ForbiddenPage = () => {
  const { t } = useTranslation("forbidden");

  return (
    <Section>
      <Title Tag="h1">{t("У вас нет прав к этой станице")}</Title>
    </Section>
  );
};

export default ForbiddenPage;
