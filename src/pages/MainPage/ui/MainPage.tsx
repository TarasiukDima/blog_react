import { useTranslation } from "react-i18next";
import { Section } from "shared/ui/Section";
import { Title } from "shared/ui/Title";

const MainPage = () => {
  const { t } = useTranslation("main");

  return (
    <Section>
      <Title>{t("title")}</Title>
    </Section>
  );
};

export default MainPage;
